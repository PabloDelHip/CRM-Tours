<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\CasesHistory;

class CasesHistoryController extends Controller
{
    public function updateOrCreateCase($id_case_history = 0, Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'information' => 'required',
                'status' => 'required',
                'case_id' => 'required|numeric'
            ]);
    
            if($validator->fails())
            {
                return response()->json([
                    'succes' => false,
                    'message' => 'Error en la validacion',
                    'errors' => $validator->errors()
                ], 422);
            }
            $status = $request->status === 'true' ? true: false;
            $case = CasesHistory::updateOrCreate(
                ['id' => $id_case_history],
                [
                    'information' => $request->information,
                    'status' => $status,
                    'case_id' => $request->case_id
                ]
            );

            if($id_case_history == 0) {
                return response()->json([
                    'succes' => true,
                    'message' => 'Historico de Caso guardado de forma correcta',
                    'case' => $case
                ], 200);                
            }

            return response()->json([
                'succes' => true,
                'message' => 'Historico de Caso modificado de forma correcta',
                'case' => $case
            ], 201);

        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'Error al guardar el caso',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function getList($id_case) {
        $cases_history = CasesHistory::with('cases')
        ->where('case_id', $id_case)
        ->where('status', true)
        ->orderBy('id', 'DESC')->get();

        return response()->json([
            'succes' => true,
            'message' => 'Historico de Caso encontrados de forma correcta',
            'case' => $cases_history
        ], 200);
    }
}
