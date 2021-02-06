<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Crypt;
use App\User;
use App\Mail\RestorePassword;
use Illuminate\Support\Facades\Mail;

class UsersController extends Controller
{
    public function get(Request $request){

    }

    public function getByUserId($userId){
        $user = User::find($userId);
        return $user;
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
    }

    public function restorePassword (Request $request) {
        try {
            $email = $request->email;
            $exists = User::where('email', $email)->get()->first();
            if(!$exists)
            {
                return response()->json([
                    'succes' => false,
                    'message' => 'El email ingresado no tiene cuenta',
                ], 422);
            }
            $num_random = random_int(1, 1000);
            $token_password = md5($num_random);
            Mail::to($email)->send(new RestorePassword($token_password));
            User::where('email', $email)
            ->update(['token_password' => $token_password]);
            return response()->json([
                'succes' => true,
                'message' => 'Email enviado de forma correcta',
            ], 200);
        } catch (\Throwable $th) {
            dd($th);
            return response()->json([
                'succes' => false,
                'message' => 'Error al enviar el email',
                'errors' => $th
            ], 500);
        }
    }

    public function getTokenPassword($token_password){
        $usuario = User::where('token_password', $token_password)
                        ->where('token_password', '<>', '')->get()->first();
        if($usuario)
        {
            return response()->json([
                'succes' => true,
                'message' => 'El token de recuperar contraseña existe',
            ], 200);
        }
        else {
            return response()->json([
                'succes' => false,
                'message' => 'El token para recuperar contraseña no existe',
            ], 422);
        }
    }

    public function updatePassword(Request $request, $token_password){ 
        try {
            User::where('token_password', $token_password)
            ->update(['password' => bcrypt($request->password),
                        'token_password' => ''
                    ]);
            return response()->json([
                'succes' => true,
                'message' => 'Contraseña cambiada correctamente',
            ], 200);
        } catch (\Throwable $th) {
            dd($th);
            return response()->json([
                'succes' => false,
                'message' => 'Error al cambiar la contraseña',
                'error' => $th
            ], 500);
        }
    }

}
