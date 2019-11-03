<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    //リレーション
    public function habit()
    {
        return $this->hasMany('App\Models\Habit');
    }

    public function status()
    {
        return $this->hasOne('App\Models\Status');
    }

    public function skill()
    {
        return $this->belongsToMany('App\Models\Skill', 'skill_user', 'user_id', 'skill_id');
    }

    public function asset()
    {
        return $this->hasOne('App\Models\Asset', 'user_id');
    }

    //ユーザー登録処理
    public function registUser($name, $password)
    {
        $result = $this->checkDuplicateUser($name);

        if (!$result) {
            $userIns = new $this;
            $userIns->name = $name;
            $userIns->password = Hash::make($password);
            $userIns->save();
            return $userIns;
        } else {
            return false;
        }
    }

    //ユーザー名が既に使われていないかのチェック
    private function checkDuplicateUser($name)
    {
        $result = $this::where('name', $name)->exists();
        return $result;
    }
}
