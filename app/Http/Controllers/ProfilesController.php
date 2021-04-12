<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use Illuminate\Database\Eloquent\MassAssignmentException;

class ProfilesController extends Controller
{
    public function getProfiles(Request $request, $type)
    {
        try{
            $profiles = Profile::select('profiles.*')
                    ->join('contacts', 'profiles.contact_id', '=', 'contacts.id')
                    ->where('contacts.type', $type)
                    ->get();

            return response()->json([
            'success' => true,
            'message' => 'Perfiles encontrados',
            'data' => $profiles,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo obtener los perfiles',
                'data' => null,
                'err' => $e
            ], 500);
        }
    }

    public function getProfile($id)
    {
        $profile = Profile::find($id);

        return response()->json([
            'success' => true,
            'message' => 'Perfil encontrado',
            'data' => $profile,
        ], 200);
    }

    public function getProfileByContactId($id)
    {
        $profile = Profile::where('contact_id', $id)->first();

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