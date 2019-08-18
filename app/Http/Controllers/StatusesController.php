<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Status;
use App\Models\User;

class StatusesController extends Controller
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
        return view('statuses.create');
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
        $status = new Status;
        $status->user_id = $request->user_id;
        $status->save();

        return back();
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

    public function set_status(Request $request)
    {
        $user = User::with([
            'status',
            'skill',
            'habit',
        ])->find($request->user_id);

        return response($user);
    }

    public function create_char(Request $request)
    {
        $status = new Status;
        $status->str = $request->str;
        $status->vit = $request->vit;
        $status->int = $request->int;
        $status->agi = $request->agi;
        $status->dex = $request->dex;
        $status->luc = $request->luc;
        $status->agi = $request->agi;
        $status->user_id = $request->user_id;
        $status->char_img = $request->img;
        $status->save();

        return response('ok');
    }

    public function grow_status(Request $request)
    {
        $status = Status::where('user_id', $request->user_id)->first();
        $status->str = $request->str;
        $status->vit = $request->vit;
        $status->int = $request->int;
        $status->agi = $request->agi;
        $status->dex = $request->dex;
        $status->luc = $request->luc;
        $status->agi = $request->agi;
        $status->point = $request->point;
        $status->save();

        return response('ok');
    }
}
