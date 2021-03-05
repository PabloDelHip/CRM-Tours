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
    'prefix' => 'v1/users'
], function () {
    // User
    Route::get('/current', 'UsersController@getCurrentUser');
    Route::get('/get', 'UsersController@getUsers');
    Route::get('/get/{userId}', 'UsersController@get');
    Route::post('/create', 'UsersController@post');
    Route::put('/put/{userId}', 'UsersController@put');
    Route::get('/delete/{id}', 'UsersController@deleteUsers');
});

Route::group([
    // 'middleware' => ['jwt.auth'],
    'prefix' => 'v1'
], function () {
    //AUTH
    Route::post('/auth/logout', 'AuthUserController@logout');
    Route::post('/auth/refresh', 'AuthUserController@refreshToken');
    Route::get('/auth/logout', 'AuthUserController@logout');
    Route::get('/me', 'AuthUserController@me');

    // Profile
    Route::get('/users/get-profile/{id}', 'UsersController@getUserProfile');

    // Permissions
    Route::get('/users/permits/{id_user}', 'UsersPermitsController@permitsUsers');
    Route::put('/users/permits/put', 'UsersPermitsController@updatePermits');
    
    // Notes
    Route::get('/notes/user/get/{id_user}', 'NotesController@getNotesUser');
    Route::post('/notes/user/save', 'NotesController@saveNotesUser');

    // Countries
    Route::get('/countries/get', 'NationsController@getCountries');
    Route::get('/states/get/{id_country}', 'NationsController@getStates');
    Route::get('/citys/get/{id_state}', 'NationsController@getCitys');
});

Route::group([
    'middleware' => ['jwt.auth'],
    'prefix' => 'v1/profile'
], function () {
    // Profiles
    Route::get('/{id}', 'ProfilesController@getProfile');
    Route::post('/create', 'ProfilesController@post');
    Route::put('/update/{id}', 'ProfilesController@put');
});

Route::group([
    'middleware' => ['jwt.auth'],
    'prefix' => 'v1/contact'
], function () {
    // Contactos
    Route::get('/{id}', 'ContactsController@getContact');
    Route::post('/create', 'ContactsController@post');
    Route::put('/update/{id}', 'ContactsController@put');
});

Route::group([
    'middleware' => ['jwt.auth'],
    'prefix' => 'v1/address'
], function () {
    // Dirección
    Route::get('/{id}', 'AddressController@getAddress');
    Route::post('/create', 'AddressController@post');
    Route::put('/update/{id}', 'AddressController@put');
});

Route::group([

    'middleware' => [],
    'prefix' => 'v1'

], function () {
    Route::post('/auth/login', 'AuthUserController@login');
    Route::post('/users/restore-password', 'UsersController@restorePassword');
    Route::get('/users/get-token-password/{token?}', 'UsersController@getTokenPassword');
    Route::put('/users/update-password/{token?}', 'UsersController@updatePassword');
    Route::get('/users/{id_user}', 'UsersPermitsController@modulPermits');
});