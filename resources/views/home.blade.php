@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        <app-base user-id="{{Auth::user()['id']}}" user-name="{{Auth::user()['name']}}"></app-base>
        {{-- <app-base :user={{Auth::user()}}></app-base> --}}
    </div>
    ユーザー情報{{Auth::user()}}<br />
    認証チェック{{auth::check()}}<br />
    csrf:{{Session::get('csrf_token')}}<br />
    {{csrf_token()}}

</div>
@endsection