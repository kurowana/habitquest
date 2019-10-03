<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    protected $fillable = ['money', 'iron', 'feather', 'wood', 'stone', 'leather', 'user_id'];

    //リレーション
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function insertAssets($type, $value, $userId)
    {
        $assets = Asset::updateOrCreate(
            ['user_id' => $userId],
            [$type => $value]
        );

        return $assets;
    }
}
