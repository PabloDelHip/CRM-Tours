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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::group([

    'middleware' => ['jwt.auth'],
    'prefix' => 'v1'

], function () {

    //AUTH
    Route::post('/auth/logout', 'AuthUserController@logout');
    Route::post('/auth/refresh', 'AuthUserController@refreshToken');
    Route::get('/auth/logout', 'AuthUserController@logout');
    Route::get('/me', 'AuthUserController@me');

    //USER
    Route::get('/users/current', 'UsersController@getCurrentUser');
});

Route::group([

    'middleware' => [],
    'prefix' => 'v1'

], function () {
    Route::post('/auth/login', 'AuthUserController@login');
    Route::get('users/get', 'UsersController@getUsers');
    Route::get('users/delete/{id}', 'UsersController@deleteUsers');
});
