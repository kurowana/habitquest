<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Habit;
use App\Models\User;
use App\Models\Status;

class HabitsController extends Controller
{
    public function insertHabit(Request $request)
    {
        $habit = new Habit;
        $habit->habit_name = $request->habitName;
        $habit->user_id = $request->userId;
        $habit->save();

        return response('ok');
    }

    public function add_habit_count(Request $request)
    {
        $habit = Habit::find($request->habit_id);
        $habit->count += 1;
        $habit->save();

        $status = Status::where('user_id', $request->user_id)
            ->first();
        $status->exp += 10 * $habit->count;
        list($lv, $count) = $status->lvup($status->lv, $status->exp);
        $status->lv = $lv;
        $status->point += $count * 3;
        $status->save();

        return response('ok');
    }

    public function delete_habit(Request $request)
    {
        $habit = Habit::find($request->habit_id);
        $habit->delete();

        return response('ok');
    }
}
