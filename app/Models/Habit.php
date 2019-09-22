<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Habit extends Model
{
    //リレーション
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function log()
    {
        return $this->belongsTo('App\Models\ActionLog', 'habit_id');
    }

    //API

}
