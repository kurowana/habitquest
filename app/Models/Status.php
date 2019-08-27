<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    //リレーション
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function lvup($lv, $exp)
    {
        $count = 0;
        while ($exp > $lv * $lv * 10) {
            $lv++;
            $count++;
        }
        return [$lv, $count];
    }

    public function registStatus($user_id, $str, $agi, $vit, $int, $dex, $luc, $imgPath)
    {
        $statusIns = new $this;
        $statusIns->str = $str;
        $statusIns->agi = $agi;
        $statusIns->vit = $vit;
        $statusIns->int = $int;
        $statusIns->dex = $dex;
        $statusIns->luc = $luc;
        $statusIns->char_img = $imgPath;
        $statusIns->user_id = $user_id;
        $statusIns->save();

        return $statusIns;
    }
}
