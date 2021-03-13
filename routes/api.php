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
    Route::get('/notes/user/get/{id_user}/{entity?}', 'NotesController@getNotesUser');
    Route::post('/notes/user/save', 'NotesController@saveNotesUser');

    // Countries
    Route::get('/countries/get', 'NationsController@getCountries');
    Route::get('/states/get/{id_country}', 'NationsController@getStates');
    Route::get('/citys/get/{id_state}', 'NationsController@getCitys');

     // Profiles
     Route::get('/profile/{id}', 'ProfilesController@getProfile');
     Route::post('/profile/create', 'ProfilesController@post');
     Route::put('/profile/update/{id}', 'ProfilesController@put');
 
     // Contactos
     Route::get('/contact/{id}', 'ContactsController@getContact');
     Route::post('/contact/create', 'ContactsController@post');
     Route::put('/contact/update/{id}', 'ContactsController@put');
 
     // Dirección
     Route::get('/address/{id}', 'AddressController@getAddress');
     Route::post('/address/create', 'AddressController@post');
     Route::put('/address/update/{id}', 'AddressController@put');
});

//Customers
Route::group([

    //'middleware' => ['jwt.auth'],
    'prefix' => 'v1/customer/'

], function () {
    
    Route::post('create', 'CustomerController@updateOrCreateCustomer');
    Route::put('update/{id_customer}', 'CustomerController@updateOrCreateCustomer');
    Route::get('get/list/{id_provider}', 'CustomerController@getListCustomer');
    Route::get('get/{id_customer}', 'CustomerController@getCustomer');
    Route::delete('delete/{id_customer}', 'CustomerController@deleteCustomer');
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
