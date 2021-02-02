<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;

class UsersController extends Controller
{
    public function get(Request $request){

    }

    public function post(Request $request){
        $user = new User();
        $user = fill($request);
        $request->password = Crypt::encryptString($request->password);
        $request->save();
        return $object;
    }

    public function getCurrentUser() {
        $token = JWTAuth::getToken();
        return User::where('remember_token', $token)->get()->first();
        //return $token;
    }
}