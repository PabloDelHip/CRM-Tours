<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;
use Exception;
use GuzzleHttp\Psr7\Message;
use PhpParser\Node\Stmt\TryCatch;

class UsersController extends Controller
{
    public function getCurrentUser() { 
        $token = JWTAuth::getToken();
        return User::where('remember_token', $token)->get()->first(); 
        //return $token;
        
    }

    public function getUsers()
    {
        try {
            $users = User::where('active', 1)->orderBy('name', 'asc')->get();
            return response()->json([
                'success' => true,
                'message' => 'Usuarios obtenidos correctamente',
                'data' => $users
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo obtener a los usuarios',
                'err' => $e
            ], 500);
        
        } 
    }

/*     public function showUsers($id){
            $users = User::find($id);
            return view('usuarios', $users);
    } */

     public function deleteUsers(Request $request, $id)
    {
        try {
            $users = User::find($id);
            $users->active = 0;
            $users->save();
            //$users = User::table('users')->where('id', $request->id)->update(['active' => 0]);
            return response()->json([
                'success' => true,
                'message' => 'El Usuario se ha eliminado correctamente',
                'data' => $users
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo eliminar el usuario',
                'err' => $e
            ], 500);
        } 

    }
}

