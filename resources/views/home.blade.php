@extends('layouts.app')

@section('content')
<div class="container">
    @if (Auth::check())
    <div id="app">
        <app-base :user-id="{{Auth::id()}}"></app-base>
    </div>

    @else
    <div>
        <h2>Habit Quest</h2>
        <app-base></app-base>
        test
        {{Auth::user()}}
        <p><a href="{{url('/register')}}">はじめから</a></p>
        <p><a href="{{url('/login')}}">続きから</a></p>
    </div>
    @endif
</div>
@endsection