<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories_Tours_Pivot;
use App\Image_Tours;

class ToursController extends Controller
{
    public function getListCategorie($id_categorie) {
        try {
            
            $tours = Categories_Tours_Pivot::with('tours')
            ->where('categories_tours_id', '=', $id_categorie)
            ->get();
        
            return response()->json([
                'succes' => true,
                'message' => 'Tours encontrados de forma correcta',
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

    public function getImagesTour($id_tour) {
        try {
            
            $images_tours = Image_Tours::where('tour_id', '=', $id_tour)
            ->where('status', '=', 1)
            ->get();
        
            return response()->json([
                'succes' => true,
                'message' => 'Iamegens del tour encontrados de forma correcta',
                'data' => $images_tours
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
