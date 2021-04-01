<?php

namespace App\Http\Controllers;
use Validator;
use Illuminate\Http\Request;
use App\Cases;

class CaseController extends Controller
{
    public function updateOrCreateCase($id_case = 0, Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'title' => 'required',
                'case' => 'required',
                'vendor_id' => 'required|numeric',
                'user_id' => 'required|numeric'
    
            ]);
    
            if($validator->fails())
            {
                return response()->json([
                    'succes' => false,
                    'message' => 'Error en la validacion',
                    'errors' => $validator->errors()
                ], 422);
            }
            
            $case = Cases::updateOrCreate(
                ['id' => $id_case],
                ['title' => $request->title,
                    'case' => $request->case,
                    'vendor_id' => $request->vendor_id,
                    'user_id' => $request->user_id
                ]
            );
            return response()->json([
                'succes' => true,
                'message' => 'Caso guardada de forma correcta',
                'case' => $case
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'Error al guardar el caso',
                'err' => $err->getMessage()
            ], 500);
        }
    }
}
