<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActionLog extends Model
{
    //リレーション
    public function habits()
    {
        return $this->hasMany('App\Models\Habit', 'habit_id');
    }
}
