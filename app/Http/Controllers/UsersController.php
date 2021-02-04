<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Crypt;
use App\User;

class UsersController extends Controller
{
    public function get(Request $request){

    }

    public function post(Request $request){
        $content = $request->all();
        $content['password'] = bcrypt($content['password']);

        $user = new User();
        $user->name = $content['name'];
        $user->password = $content['password'];
        $user->email = $content['email'];
        $user->status = $content['status'];
        $user->save();
        return $user;
    }

    public function getCurrentUser() {
        $token = JWTAuth::getToken();
        return User::where('remember_token', $token)->get()->first();
        //return $token;
    }
}