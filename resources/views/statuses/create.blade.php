@extends('../layouts/app')

@section('content')
    <h2>キャラクター作成</h2>
    <form action="{{ url('status') }}" method="post">
        @csrf
        <input type="text" name="user_id" value="{{Auth::id()}}">
        <input type="submit" value="作成">
    </form>
@endsection