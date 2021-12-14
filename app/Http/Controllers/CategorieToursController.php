<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories_Tours_Pivot;
use App\Categorie_Tour;
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

    public function getListCategories() {
        try {
            $categorie_tours = Categorie_Tour::where('status', '=', true)->get();
            return response()->json([
                'succes' => true,
                'message' => 'Historico de Caso encontrados de forma correcta',
                'categories' => $categorie_tours
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener categorias',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function getListCategoriesTours() {
        try {
            $categorie_tours = Categorie_Tour::select('id','name', 'see_home', 'status')->get();
            return response()->json([
                'succes' => true,
                'message' => 'Categorias encontradas de forma correcta',
                'data' => $categorie_tours
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener categorias',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function updateCategorieTour(Request $request, $id_categorie) {
        try {

            $categorie = Categorie_Tour::find($id_categorie);
            $req = $request->all();

            $categorie->status = $req['status'];
            $categorie->see_home = $req['see_home'];
            $categorie->save();

            $categorie_tours = Categorie_Tour::select('id','name', 'see_home', 'status')->get();
            return response()->json([
                'succes' => true,
                'message' => 'Categorias encontradas de forma correcta',
                'data' => $categorie
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener categorias',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function UpdateCategorieTourAll(Request $request, $id_categorie) {
        try {
            $categorie = Categorie_Tour::find($id_categorie);
            $req = $request->all();
            $categorie->name = $req['name'];
            $categorie->description = $req['description'];
            $categorie->meta_description = $req['meta_description'];
            $categorie->status = $req['status'];
            $categorie->see_home = $req['see_home'];
            $categorie->save();

            $categorie_tours = Categorie_Tour::select('id','name', 'see_home', 'status')->get();
            return response()->json([
                'succes' => true,
                'message' => 'Categorias encontradas de forma correcta',
                'data' => $categorie
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener categorias',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function getCategorieTour($id_categorie) {
        try {
            $categorie = Categorie_Tour::find($id_categorie);
            return response()->json([
                'succes' => true,
                'message' => 'Categorias encontradas de forma correcta',
                'data' => $categorie
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al optener categorias',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function saveCategories(Request $request) {
        try{
            
            $categorie = new Categorie_Tour();
            $categorie->name = $request->name;
            $categorie->description = $request->description;
            $categorie->image = $request->image;
            $categorie->title = $request->title;
            $categorie->meta_description = $request->meta_description;
            $categorie->keywords = $request->keywords;
            $categorie->see_home = $request->see_home;
            $categorie->reverse_outside = $request->reverse_outside;
            $categorie->status = $request->status;
            $categorie->save();
      
            return response()->json([
              'success' => true,
              'message' => 'categoria guardada',
              'data' => $categorie,
            ], 200);
          }
          catch (MassAssignmentException $err){
            return response()->json([
              'success' => false,
              'message' => 'Categoria no guardada',
              'err' => $err,
            ], 500);
          }
    }
}
