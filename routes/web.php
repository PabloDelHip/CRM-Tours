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

Route::get('/', ['as' => '/', 'uses' => 'HomeController@index']);

///Login///
Route::get('/login', ['as' => 'login', 'uses' => 'LoginController@index']);
Route::get('/restablecer-contrasena', ['as' => 'restablecer-contrasena', 'uses' => 'LoginController@index']);
Route::get('/nueva-contrasena/{token?}', ['as' => '/nueva-contrasena', 'uses' => 'LoginController@index']);

Route::get('/user/create', ['as' => '/user/create', 'uses' => 'HomeController@index']);
Route::get('/user/edit', ['as' => '/user/edit', 'uses' => 'HomeController@index']);

//Dashboard
Route::get('/overview', ['as' => '/overview', 'uses' => 'HomeController@index']);

//Users
Route::get('/obtener-usuarios', ['as' => '/obtener-usuarios', 'uses' => 'HomeController@index']);
