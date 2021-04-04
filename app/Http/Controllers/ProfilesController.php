<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use Illuminate\Database\Eloquent\MassAssignmentException;

class ProfilesController extends Controller
{
    public function getProfile($id)
    {
        $profile = Profile::find($id);

        return response()->json([
            'success' => true,
            'message' => 'Perfil encontrado',
            'data' => $profile,
        ], 200);
    }

    public function post(Request $request){
        $content = $request->all();

        $profile = new Profile();
        $profile->name = $content['name'];
        $profile->last_name = $content['last_name'];
        $profile->birth_date = $content['birth_date'];
        $profile->sex = $content['sex'];
        $profile->contact_id = $content['contact_id'];

        $profile->save();
        
        return response()->json([
            'success' => true,
            'message' => 'Perfil insertado',
            'data' => $profile,
        ], 200);
    }

    public function put(Request $request, $id){
        $profile = Profile::find($id);
        $content = $request->all();

        $profile->name = $content['name'];
        $profile->last_name = $content['last_name'];
        $profile->birth_date = $content['birth_date'];
        $profile->sex = $content['sex'];
        $profile->contact_id = $content['contact_id'];

        $profile->save();
        
        return response()->json([
            'success' => true,
            'message' => 'Perfil actualizado',
            'data' => $profile,
        ], 200);
    }
}