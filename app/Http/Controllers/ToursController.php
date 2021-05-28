<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories_Tours_Pivot;
use App\Image_Tours;
use App\Tour;
use App\Seo_Tour;
use App\General_Information;
use App\Operation_Tour;

class ToursController extends Controller
{
    public function getTours(){
        try
        {
            $tours = Tour::get();
            
            return response()->json([
                'success' => true,
                'message' => 'Tours encontrados de forma correcta',
                'data' => $tours
            ], 200);
        }
        catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tours',
                'err' => $ex->getMessage()
            ], 500);
        }
    }

    public function getListCategorie($id_categorie) {
        try {
            
            $tours = Categories_Tours_Pivot::with('tours')
            ->where('categories_tours_id', '=', $id_categorie)
            ->get();
        
            return response()->json([
                'success' => true,
                'message' => 'Tours encontrados de forma correcta',
                'data' => $tours
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tours',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function getTour($id){
        try {
            $tour = Tour::where('id', '=', $id)->first();
        
            return response()->json([
                'success' => true,
                'message' => 'Tour encontrado de forma correcta',
                'data' => $tour
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'success' => false,
                'message' => 'error tours',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function post(Request $request){
      try{
        $content = $request->all();
  
        $tour = new Tour();
        $tour->name = $content['name'];
        $tour->assisted_purchase = $content['assisted_purchase'];
        $tour->url = $content['url'];
        $tour->status = $content['status'];
        $tour->vendor_id = $content['vendor_id'];
        $tour->save();
  
        return response()->json([
          'success' => true,
          'message' => 'Tour insertado',
          'data' => $tour,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => true,
          'message' => 'Tour no insertado',
          'err' => $ex,
        ], 200);
      }
    }

    public function put(Request $request, $tourId){
      try{
        $content = $request->all();
  
        $tour = Tour::find($tourId);
        $tour->name = $content['name'];
        $tour->assisted_purchase = $content['assisted_purchase'];
        $tour->url = $content['url'];
        $tour->status = $content['status'];
        $tour->vendor_id = $content['vendor_id'];
        $tour->save();
  
        return response()->json([
          'success' => true,
          'message' => 'Tour actualizado',
          'data' => $tour,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => true,
          'message' => 'Tour no actualizado',
          'err' => $ex,
        ], 200);
      }
    }

    public function getInfoTour($id_tour) {
        try {
            
            $tour = Tour::where('id', '=', $id_tour)
                ->where('status', '=', 1)
                ->get();

            $seo_tour = Seo_Tour::where('tour_id', '=', $id_tour)
                ->get();

            $general_information = General_Information::where('tour_id', '=', $id_tour)
                ->get();
            
            $operation_tour = Operation_Tour::where('tour_id', '=', $id_tour)
                ->get();

            $data_tour = [
                "tour" => $tour,
                "seo_tour" => $seo_tour,
                "general_information" => $general_information,
                "operation_tour" => $operation_tour
            ];
        
            return response()->json([
                'success' => true,
                'message' => 'Tour encontrado de forma correcta',
                'data' => $data_tour
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'success' => false,
                'message' => 'error tours',
                'err' => $err->getMessage()
            ], 500);
        }
    }
}