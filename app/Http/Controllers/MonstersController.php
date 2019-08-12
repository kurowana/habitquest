<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Monster;

class MonstersController extends Controller
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
    public function add_monster(Request $request){
        $monster=new Monster;
        $monster->monster_name=$request->name;
        $monster->hp=$request->hp;
        $monster->mp=$request->mp;
        $monster->atk=$request->atk;
        $monster->matk=$request->matk;
        $monster->def=$request->def;
        $monster->mdef=$request->mdef;
        $monster->spd=$request->spd;
        $monster->hit=$request->hit;
        $monster->flee=$request->flee;
        $monster->save();

        return response('ok');
    }

    public function appear_monster(Request $request){
        $monster=Monster::find(2);

        return response($monster);
    }
}
