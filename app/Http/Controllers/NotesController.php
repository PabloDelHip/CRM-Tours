<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;
use Illuminate\Database\Eloquent\MassAssignmentException;

class NotesController extends Controller
{
    public function getNotesUser($id_user_profile, $entity = 'users')
    {   
        switch ($entity) {
            case 'users':
                $notes = Note::where('user_profile_id', $id_user_profile)->orderBy('id', 'DESC')->get();
                break;
            case 'customers':
                $notes = Note::where('customer_id', $id_user_profile)->orderBy('id', 'DESC')->get();
                break;
        }
        if(!$notes)
        {
            return response()->json([
                'succes' => false,
                'message' => 'El usuario ingresado no tiene notas',
            ], 204);
        }
        foreach ($notes as $note) {
            $note->user = $note->user;
        }
        return response()->json([
            'succes' => true,
            'message' => 'El usuario si tiene notas',
            'notes' => $notes
        ], 200);
    }

    public function saveNotesUser(Request $request)
    {   try {
           $noteSave = Note::create($request->all());
           return response()->json([
            'succes' => true,
            'message' => 'Nota guardada de forma correcta',
            'note' => $noteSave
        ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'Error al guardar la nota',
                'err' => $err->getMessage()
            ], 500);
        }
    }
}
