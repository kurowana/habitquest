<?php

use Illuminate\Http\Request;
use App\Http\Controllers\HabitsController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/create_char', 'StatusesController@create_char');
Route::post('/set_status', 'StatusesController@set_status');
Route::post('/grow_status', 'StatusesController@grow_status');

Route::post('/add_habit', 'HabitsController@add_habit');
Route::post('/add_habit_count', 'HabitsController@add_habit_count');
Route::post('/delete_habit', 'HabitsController@delete_habit');

Route::post('/add_monster', 'MonstersController@add_monster');

Route::post('/appear_monster', 'MonstersController@appear_monster');
