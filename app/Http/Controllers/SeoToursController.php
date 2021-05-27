<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Seo_Tour;

class SeoToursController extends Controller
{
    public function getSeoTourByTourId($id){
        try {
            $seoTour = Seo_Tour::where('tour_id', '=', $id)->first();
        
            return response()->json([
                'success' => true,
                'message' => 'SeoTour encontrado de forma correcta',
                'data' => $seoTour
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'success' => false,
                'message' => 'Error SeoTours',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function post(Request $request){
      try{
        $content = $request->all();
  
        $seoTour = new Seo_Tour();
        $seoTour->keywords = $content['keywords'];
        $seoTour->meta_description = $content['meta_description'];
        $seoTour->title = $content['title'];
        $seoTour->description = $content['description'];
        $seoTour->see_home = $content['see_home'];
        $seoTour->tour_id = $content['tour_id'];
        $seoTour->save();
  
        return response()->json([
          'success' => true,
          'message' => 'SeoTour insertado',
          'data' => $seoTour,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => true,
          'message' => 'SeoTour no insertado',
          'err' => $ex,
        ], 200);
      }
    }

    public function put(Request $request, $seoTourId){
      try{
        $content = $request->all();
  
        $seoTour = Seo_Tour::find($seoTourId);
        $seoTour->keywords = $content['keywords'];
        $seoTour->meta_description = $content['meta_description'];
        $seoTour->title = $content['title'];
        $seoTour->description = $content['description'];
        $seoTour->see_home = $content['see_home'];
        $seoTour->tour_id = $content['tour_id'];
        $seoTour->save();
  
        return response()->json([
          'success' => true,
          'message' => 'SeoTour actualizado',
          'data' => $seoTour,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => true,
          'message' => 'SeoTour no actualizado',
          'err' => $ex,
        ], 200);
      }
    }
}