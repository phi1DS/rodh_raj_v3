<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('css/css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/reset.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/knackcss.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

    <meta name="viewport" content="initial-scale=1">

    <title>@yield ('title')</title>

    @yield ('head')
</head>
<body>
@yield ('body-content')

{{--<script src="https://code.jquery.com/jquery-3.4.1.min.js"--}}
{{--        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="--}}
{{--        crossorigin="anonymous">--}}
{{--</script>--}}

<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

{{--<script type="text/javascript">--}}
{{--    $('#burger-button').on('click', () => {--}}
{{--        $('.ui.sidebar')--}}
{{--            .sidebar('toggle')--}}
{{--        ;--}}
{{--    });--}}
{{--</script>--}}

@yield ('scripts')
</body>

</html>
