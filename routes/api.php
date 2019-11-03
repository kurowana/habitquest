<?php

use Illuminate\Http\Request;
use App\Http\Controllers\HabitsController;
use App\Http\Controllers\StatusesController;

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

Route::post('/registUser', 'UserController@registUser');

// Route::post('/create_char', 'StatusesController@create_char');
// Route::post('/set_status', 'StatusesController@set_status');
// Route::post('/grow_status', 'StatusesController@grow_status');

//習慣登録
Route::post('/getMyHabits', 'HabitsController@getMyHabits');
Route::post('/insertHabit', 'HabitsController@insertHabit');
Route::post('/addHabitCount', 'HabitsController@addHabitCount');
Route::post('/deleteHabit', 'HabitsController@deleteHabit');

//ステータス関連
Route::post('/getMyStatus', 'StatusesController@getMyStatus');
Route::post('/updateStatus', 'StatusesController@updateStatus');

//資源関連
Route::post('/insertAssets', 'AssetsController@insertAssets');
Route::post('/getMyAssets', 'AssetsController@getMyAssets');

//装備関連


// Route::post('/add_monster', 'MonstersController@add_monster');

// Route::post('/appear_monster', 'MonstersController@appear_monster');
