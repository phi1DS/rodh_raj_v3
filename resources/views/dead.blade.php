@extends ('layout')

@section ('title')
    Dead
@endsection

@section ('body-content')
    <div class="wrapper" id="wrapper">
        <div class="room_top">
            <div class="room_title">
                <h1>VOUS ETES MORT</h1>
            </div>
                <div class="skullBackLink">
                    <a href="{{route('homepage')}}">Retenter !</a>
                </div>
    </div>
@endsection

