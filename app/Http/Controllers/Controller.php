<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Status;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function registUser(Request $request)
    {
        $userIns = new User;
        $user = $userIns->registUser($request->name, $request->password);

        $statusIns = new Status;
        $status = $statusIns->registStatus(
            $user->id,
            $request->str,
            $request->agi,
            $request->vit,
            $request->int,
            $request->dex,
            $request->luc,
            $request->selectedImg
        );

        return response([$user, $status]);
    }
}
