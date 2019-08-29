@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        <app-base user="{{Auth::user()}}"></app-base>
        {{-- <app-base :user={{Auth::user()}}></app-base> --}}
    </div>
    ユーザー情報{{Auth::user()}}
</div>
@endsection