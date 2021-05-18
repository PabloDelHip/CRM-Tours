<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories_Tours_Pivot;
use DB;
class CategorieToursController extends Controller
{
    public function getList() {
        try {
            
            $categories_tours = Categories_Tours_Pivot::with('tours')
            ->with('categories_tours')
            ->get()
            ->groupBy('categories_tours_id');
            

            //dd($categories_tours);

            $categories = DB::table('categories_tours_pivot')
                 ->select('categories_tours_id', DB::raw('count(*) as total'))

                 ->groupBy('categories_tours_id')
                 ->get();

            foreach ($categories as $categorie) {
               
                $categorie->tours = $categories_tours[strval($categorie->categories_tours_id)];
                $categorie->categorie_name = $categorie->tours[0]['categories_tours']['name'];
                $categorie->categorie_status = $categorie->tours[0]['categories_tours']['status'];
                $categorie->categorie_see_home = $categorie->tours[0]['categories_tours']['see_home'];
                $categorie->categorie_description = $categorie->tours[0]['categories_tours']['description'];

                foreach ($categorie->tours as $tour) {
                    unset($tour["categories_tours"]);
                }
            }



            
            return response()->json([
                'succes' => true,
                'message' => 'Historico de Caso encontrados de forma correcta',
                'categories' => $categories
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener categorias',
                'err' => $err->getMessage()
            ], 500);
        }
    }
}
