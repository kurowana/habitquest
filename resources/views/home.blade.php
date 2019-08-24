@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        {{-- <app-base :user-id="{{Auth::id()}}"></app-base> --}}
        <app-base></app-base>
    </div>
    ユーザー情報{{Auth::user()}}
</div>
@endsection