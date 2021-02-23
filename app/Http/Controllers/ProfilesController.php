<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use Illuminate\Database\Eloquent\MassAssignmentException;

class ProfilesController extends Controller
{
    public function getProfile($id)
    {
        $profile = Profile::where('id', $id)->get();

        return response()->json([
            'success' => true,
            'message' => 'Perfil encontrado',
            'data' => $profile,
        ], 200);
    }
}