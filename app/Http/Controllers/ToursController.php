<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories_Tours_Pivot;

class ToursController extends Controller
{
    public function getListCategorie($id_categorie) {
        try {
            
            $tours = Categories_Tours_Pivot::with('tours')
            ->where('categories_tours_id', '=', $id_categorie)
            ->get();
            

            //dd($tours);



            
            return response()->json([
                'succes' => true,
                'message' => 'Historico de Caso encontrados de forma correcta',
                'data' => $tours
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener tours',
                'err' => $err->getMessage()
            ], 500);
        }
    }
}
