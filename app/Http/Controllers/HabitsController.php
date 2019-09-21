<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Habit;
use App\Models\User;
use App\Models\Status;
use Illuminate\Support\Facades\Date;

use DateTime;

class HabitsController extends Controller
{
    public function getMyHabits(Request $request)
    {
        $habits = Habit::where("user_id", $request->userId)->get();
        return $habits;
    }

    public function insertHabit(Request $request)
    {
        $habit = new Habit;
        $habit->habit_name = $request->habitName;
        $habit->user_id = $request->userId;
        $habit->save();

        return response('ok');
    }

    public function addHabitCount(Request $request)
    {

        $habit = Habit::find($request->habitId);

        $now = new DateTime();
        if ($habit->last_date != null) {
            $lastDate = new DateTime($habit->last_date);
        } else {
            $lastDate = new DateTime('1970-01-01');
        }
        $diff = $now->diff($lastDate);
        $diff_day = $diff->format('%d');

        if ($diff_day > 1) {
            $habit->count += 1;
            $habit->last_date = $now;
            $habit->save();
        }

        // $status = Status::where('user_id', $request->user_id)
        //     ->first();
        // $status->exp += 10 * $habit->count;
        // list($lv, $count) = $status->lvup($status->lv, $status->exp);
        // $status->lv = $lv;
        // $status->point += $count * 3;
        // $status->save();

        return response('ok');
    }

    public function deleteHabit(Request $request)
    {
        $habit = Habit::find($request->habitId);
        $habit->delete();

        return response('ok');
    }
}
