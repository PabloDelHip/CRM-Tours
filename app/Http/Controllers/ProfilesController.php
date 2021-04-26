<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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

        $profile->image = Storage::disk('images-profile')->url($profile->image);

        return response()->json([
            'success' => true,
            'message' => 'Perfil encontrado',
            'data' => $profile,
        ], 200);
    }

    public function getProfileByContactId($id)
    {
        $profile = Profile::where('contact_id', $id)->first();
        $profile->image = Storage::disk('images-profile')->url($profile->image);

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

        $image_64 = $content['picture']; //your base64 encoded data

        $successImage = false;
        if ($image_64){
            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
            $replace = substr($image_64, 0, strpos($image_64, ',')+1);
            
            $image = str_replace($replace, '', $image_64);
            $image = str_replace(' ', '+', $image);
            
            $imageName = $profile->image;
            if (!$imageName){
                $imageName = "profile-".Str::random(20).'.'.$extension;
                $profile->image = $imageName;
            }
            $successImage = Storage::disk('images-profile')->put($imageName, base64_decode($image));
        }
      
        $profile->save();
        
        return response()->json([
            'success' => true,
            'message' => 'Perfil actualizado',
            'data' => $profile,
            'successImage' => successImage,
        ], 200);
    }
}