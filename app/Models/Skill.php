<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    //
    public function user()
    {
        return $this->belongsToMany('App\Models\User', 'skill_user', 'skill_id', 'user_id');
    }
}
