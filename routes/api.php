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

    Route::post('/auth/logout', 'AuthController@logout');
    Route::post('/auth/refresh', 'AuthUserController@refreshToken');
    Route::get('/auth/logout', 'AuthUserController@logout');
    Route::get('/auth/expire', 'AuthController@expireToken');
    Route::post('me', 'AuthController@me');

});

Route::group([

    'middleware' => [],
    'prefix' => 'v1'

], function () {
    Route::post('/auth/login', 'AuthUserController@login');
});
