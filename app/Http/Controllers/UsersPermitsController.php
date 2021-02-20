<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use App\User_modul;
use App\Moduls;
use Exception;
use Illuminate\Validation\Rules\Exists;

class UsersPermitsController extends Controller
{
    public function permitsUsers(Request $request, $id)
    {
        $modules = User_modul::where('user_id', '=', $id)->get();
        if (count($modules) >= 1) {
            try {
                $permits = Moduls::leftjoin('user_modul', 'moduls.id', '=', 'user_modul.module_id')
                    ->select('moduls.id', 'moduls.modul', 'user_modul.created', 'user_modul.read', 'user_modul.update', 'user_modul.delete')
                    ->orderBy('moduls.id', 'desc')
                    ->where('user_modul.user_id', $id)->get();
                return response()->json([
                    'success' => true,
                    'message' => 'Permisos obtenidos correctamente',
                    'data' => $permits
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo obtener los permisos',
                    'err' => $e
                ], 500);
            }
        } else {
            try {
                $user_id = $id;
                $permits = Moduls::Select('id', 'modul')->get();
                $permits->map(function ($permit) {
                    $permit->created = 0;
                    $permit->read = 0;
                    $permit->update = 0;
                    $permit->delete = 0;
                });
                return response()->json([
                    'success' => true,
                    'message' => 'Permisos obtenidos correctamente',
                    'data' => $permits
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudo obtener los permisos',
                    'err' => $e
                ], 500);
            }
        }
    }

    public function updatePermits(Request $request)
    {
        $id = $request->user_id;
        $column = $request->column;
        $value = $request->value;
        $id_modul = $request->module_id;

        $modules = User_modul::where('user_id', '=', $id)->where('module_id', '=', $id_modul)->get();

        // Si existe
        if (count($modules) >= 1) {
            try {
                $modules = User_modul::where('user_id', '=', $id)
                    ->where('module_id', '=', $id_modul)
                    ->update([$column => $value]);
                return response()->json([
                    'success' => true,
                    'message' => 'Los permisos se han actualizado correctamente',
                    'data' => $modules
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudieron actualizar los permisos',
                    'err' => $e
                ], 500);
            }
        } else {
            try {
                $modules = new User_modul();
                $modules->user_id = $id;
                $modules->module_id = $id_modul;
                $modules->created = 0;
                $modules->read = 0;
                $modules->update = 0;
                $modules->delete = 0;
                $modules->save();
                $modules = User_modul::where('user_id', '=', $id)
                    ->where('module_id', '=', $id_modul)
                    ->update([$column => $value]);
                return response()->json([
                    'success' => true,
                    'message' => 'Los permisos se han insertado correctamente',
                    'data' => $modules
                ], 200);
            } catch (Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'No se pudieron insertar los permisos',
                    'err' => $e
                ], 500);
            }
        }
    }
}
