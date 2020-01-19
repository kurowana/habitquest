@extends('layouts.app')

@section('content')
{{-- <div class="container"> --}}
<div id="app">
    <div class="app-wrapper">
        <app-base user-id="{{Auth::user()['id']}}" user-name="{{Auth::user()['name']}}"></app-base>
    </div>
    <div>
        <app-container></app-container>
    </div>
</div>
@endsection