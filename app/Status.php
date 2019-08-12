<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    //
    public function user(){
        return $this->belongsTo('App\User');
    }

    public function lvup($lv,$exp){
        $count=0;
        while($exp>$lv*$lv*10){
            $lv++;
            $count++;
        }
        return [$lv,$count];
    }
}
