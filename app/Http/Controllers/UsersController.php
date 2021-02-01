<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;

class UsersController extends Controller
{
    public function getCurrentUser() {
        $token = JWTAuth::getToken();
        return User::where('remember_token', $token)->get()->first();
        //return $token;
        
    }
}
