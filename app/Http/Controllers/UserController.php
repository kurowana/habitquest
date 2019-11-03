<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Status;

class UserController extends Controller
{
    //
    public function registUser(Request $request)
    {
        $userIns = new User;
        $user = $userIns->registUser($request->name, $request->password);

        if ($user !== false) {
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
        } else {
            return response("error");
        }
    }
}
