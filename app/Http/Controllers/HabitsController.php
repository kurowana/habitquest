<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Habit;
use App\User;
use App\Status;

class HabitsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function add_habit(Request $request){
        $habit=new Habit;
        $habit->habit_name=$request->habit_name;
        $habit->user_id=$request->user_id;
        $habit->save();

        return response('ok');
    }

    public function add_habit_count(Request $request){
        $habit=Habit::find($request->habit_id);
        $habit->count+=1;
        $habit->save();

        $status=Status::where('user_id',$request->user_id)
            ->first();
        $status->exp+=10*$habit->count;
        list($lv,$count)=$status->lvup($status->lv,$status->exp);
        $status->lv=$lv;
        $status->point+=$count*3;
        $status->save();

        return response('ok');
    }

    public function delete_habit(Request $request){
        $habit=Habit::find($request->habit_id);
        $habit->delete();

        return response('ok');
    }
}
