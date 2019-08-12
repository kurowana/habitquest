<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Habit;
use App\Status;
use App\Skill;
use App\Monster;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user=User::with([
            'status',
            'habit',
            'skill'
        ])->find(Auth::id());

        return view('home',['user'=>$user]);
    }
}
