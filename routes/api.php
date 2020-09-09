<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1.0')->group(function () {
    Route::get('/room/get-start', 'Api\ApiV1RoomController@getStartRoom')->name('api_get_start_room');
    Route::get('/room/get-end', 'Api\ApiV1RoomController@getEndRoom')->name('api_get_end_room');

    Route::get('/room/get-random', 'Api\ApiV1RoomController@getRandomRoom')->name('api_get_random_room');
    Route::get('/room-action/{code}', 'Api\ApiV1RoomController@getRoomAction')->name('api_get_room_action');

    if (env('APP_ENV') !== 'production' && env('APP_ENV') !== 'staging') {
        Route::prefix('tests')->group(function () {
            Route::get('/room/get-treasureRoom', 'Api\ApiV1RoomTestController@getTreasureRoom')->name('api_tests_treasure_room');
        });
    }
});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
