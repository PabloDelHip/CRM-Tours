<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use App\User_Permits;
use App\User_modules;
use Exception;


class UsersPermitsController extends Controller
{
    public function permitsUsers(Request $request, $id)
    {
        try {
/*             $permits = User::leftjoin('users_permits', 'users.id', '=', 'users_permits.id_user')
                            ->leftjoin('users_modules', 'users_permits.id_module', '=', 'users_modules.id_module')
                            ->select('users.id as id_user', 'users.name as user', 'users_permits.id_module', 'users_modules.name as module', 'users_permits.watch', 'users_permits.add', 'users_permits.edit', 'users_permits.delete')
                            ->where('id', $id)->get(); */
            $permits = User_modules::leftjoin('users_permits', 'users_permits.id_module', '=', 'users_modules.id_module')
                                    ->select('users_modules.id_module', 'users_modules.name as module', 'users_permits.watch', 'users_permits.add', 'users_permits.edit', 'users_permits.delete')
                                    ->orderBy('users_modules.id_module', 'asc')
                                    ->get();
                                    //->where('id', $id)->get();
            return response()->json([
                'success' => true,
                'message' => 'Usuarios obtenidos correctamente',
                'data' => $permits
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo obtener a los usuarios',
                'err' => $e
            ], 500);
        }
    }
}
