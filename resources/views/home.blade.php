@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        <app-base :user-id="{{Auth::id()}}"></app-base>
    </div>
</div>
@endsection
