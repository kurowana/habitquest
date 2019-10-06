@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        <app-base user-id="{{Auth::user()['id']}}" user-name="{{Auth::user()['name']}}"></app-base>
    </div>
</div>
@endsection