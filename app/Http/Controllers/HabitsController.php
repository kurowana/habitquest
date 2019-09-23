<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Habit;
use App\Models\User;
use App\Models\Status;
use App\Models\ActionLog;

use Carbon\Carbon;

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

        $now = new Carbon();
        if ($habit->last_date != null) {
            $lastDate = new Carbon($habit->last_date);
        } else {
            $lastDate = new Carbon('1970-01-01');
        }

        if (!$lastDate->isToday()) {
            $habit->count += 1;
            $habit->last_date = $now;
            $habit->save();

            $status = Status::where('user_id', $request->userId)
                ->first();
            $status->exp += 10 * $habit->count;
            list($lv, $count) = $status->lvup($status->lv, $status->exp);
            $status->lv = $lv;
            $status->point += $count * 3;
            $status->save();

            $log = new ActionLog;
            $log->past_count = $habit->count;
            $log->habit_id = $habit->id;
            $log->save();
            return response('習慣の実行を記録しました');
        } else {
            return response('本日の活動は記録しています。また明日がんばりましょう！');
        }
    }

    public function deleteHabit(Request $request)
    {
        $habit = Habit::find($request->habitId);
        $habit->delete();

        return response('ok');
    }
}
