<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('game');
})->name('homepage');

Route::get('/dead', function () {
    return view('dead');
})->name('dead');

Route::get('/laravel', function () {
    return view('welcome');
})->name('laravel');
