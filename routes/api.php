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

    // User
    Route::get('/users/current', 'UsersController@getCurrentUser');
    Route::get('/users/get/', 'UsersController@getUsers');
    Route::get('/users/get/{userId}', 'UsersController@get');
    Route::post('/users/create', 'UsersController@post');
    Route::put('/users/put/{userId}', 'UsersController@put');
    Route::get('/users/delete/{id}', 'UsersController@deleteUsers');

    // Profile
    Route::get('/users/get-profile/{id}', 'UsersController@getUserProfile');

    // Permissions
    Route::get('/users/permits/{id_user}', 'UsersPermitsController@permitsUsers');
    Route::put('/users/permits/put', 'UsersPermitsController@updatePermits');
    
    // Notes
    Route::get('/notes/user/get/{id_user}', 'NotesController@getNotesUser');
    Route::post('/notes/user/save', 'NotesController@saveNotesUser');
});

Route::group([

    'middleware' => [],
    'prefix' => 'v1'

], function () {
    Route::post('/auth/login', 'AuthUserController@login');
    Route::post('/users/restore-password', 'UsersController@restorePassword');
    Route::get('/users/get-token-password/{token?}', 'UsersController@getTokenPassword');
    Route::put('/users/update-password/{token?}', 'UsersController@updatePassword');
});
