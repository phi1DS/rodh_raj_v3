<?php

use App\Http\Controllers\Api\ApiV1RoomController;
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
    Route::get('/room/get-start', [ApiV1RoomController::class, 'getStartRoom'])->name('api_get_start_room');
    Route::get('/room/get-end', [ApiV1RoomController::class, 'getEndRoom'])->name('api_get_end_room');

    Route::get('/room/get-random', [ApiV1RoomController::class, 'getRandomRoom'])->name('api_get_random_room');
    Route::get('/room-action/{code}', [ApiV1RoomController::class, 'getRoomAction'])->name('api_get_room_action');
});

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
