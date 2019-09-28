<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Status;
use App\Models\User;

class StatusesController extends Controller
{
    public function getMyStatus(Request $request)
    {
        $status = Status::where('user_id', $request->userId)->first();

        return $status;
    }

    public function updateStatus(Request $request)
    {
        $userId = Auth::id();

        DB::beginTransaction();
        try {
            $statusIns = new Status;
            $status = $statusIns->updateStatus(
                $userId,
                $request->point,
                $request->status
            );
            DB::commit();
        } catch (\Exception $e) {
            Log::error($e);
            return response('ng');
        }

        return response($status);
    }

    // public function set_status(Request $request)
    // {
    //     $user = User::with([
    //         'status',
    //         'skill',
    //         'habit',
    //     ])->find($request->user_id);

    //     return response($user);
    // }

    // public function create_char(Request $request)
    // {
    //     $status = new Status;
    //     $status->str = $request->str;
    //     $status->vit = $request->vit;
    //     $status->int = $request->int;
    //     $status->agi = $request->agi;
    //     $status->dex = $request->dex;
    //     $status->luc = $request->luc;
    //     $status->agi = $request->agi;
    //     $status->user_id = $request->user_id;
    //     $status->char_img = $request->img;
    //     $status->save();

    //     return response('ok');
    // }

    // public function grow_status(Request $request)
    // {
    //     $status = Status::where('user_id', $request->user_id)->first();
    //     $status->str = $request->str;
    //     $status->vit = $request->vit;
    //     $status->int = $request->int;
    //     $status->agi = $request->agi;
    //     $status->dex = $request->dex;
    //     $status->luc = $request->luc;
    //     $status->agi = $request->agi;
    //     $status->point = $request->point;
    //     $status->save();

    //     return response('ok');
    // }
}
