<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'HabitQuest') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="header">
            <a href="{{ url('/') }}">
                {{ config('app.name', 'HabitQuest') }}
            </a>
            
            <a href="{{ route('login') }}">{{ __('Login') }}</a>
            <a href="{{ route('register') }}">{{ __('Register') }}</a>
            <form action="{{ route('logout') }}" method="POST">
                @csrf
                <button type="submit">ログアウト</button>
            </form>

        </div>
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
