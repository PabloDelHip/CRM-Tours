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
Route::get('/user/login', ['as' => 'login', 'uses' => 'LoginController@index']);
Route::get('/user/restablecer-contrasena', ['as' => '/restablecer-contrasena', 'uses' => 'LoginController@index']);
Route::get('/user/nueva-contrasena', ['as' => '/nueva-contrasena', 'uses' => 'LoginController@index']);

Route::get('/user/create', ['as' => '/create', 'uses' => 'LoginController@index']);

//Dashboard
Route::get('/overview', ['as' => '/overview', 'uses' => 'HomeController@index']);
