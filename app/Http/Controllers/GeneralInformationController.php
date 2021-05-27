<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\General_Information;

class GeneralInformationController extends Controller
{
    public function getGeneralInformationByTourId($id){
        try {
            $generalInformation = General_Information::where('tour_id', '=', $id)->first();
        
            return response()->json([
                'success' => true,
                'message' => 'Información general encontrado de forma correcta',
                'data' => $generalInformation
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'success' => false,
                'message' => 'Error Información general',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function post(Request $request){
      try{
        $content = $request->all();
  
        $generalInformation = new General_Information();
        $generalInformation->description = $content['description'];
        $generalInformation->recommendation = $content['recommendation'];
        $generalInformation->includes = $content['includes'];
        $generalInformation->itinerary = $content['itinerary'];
        $generalInformation->additional_information = $content['additional_information'];
        $generalInformation->duration = $content['duration'];
        $generalInformation->qualification = $content['qualification'];
        $generalInformation->tour_id = $content['tour_id'];
        $generalInformation->save();
  
        return response()->json([
          'success' => true,
          'message' => 'Información general insertado',
          'data' => $generalInformation,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => true,
          'message' => 'Información general no insertado',
          'err' => $ex,
        ], 200);
      }
    }

    public function put(Request $request, $generalInformationId){
      try{
        $content = $request->all();
  
        $generalInformation = General_Information::find($generalInformationId);
        $generalInformation->description = $content['description'];
        $generalInformation->recommendation = $content['recommendation'];
        $generalInformation->includes = $content['includes'];
        $generalInformation->itinerary = $content['itinerary'];
        $generalInformation->additional_information = $content['additional_information'];
        $generalInformation->duration = $content['duration'];
        $generalInformation->qualification = $content['qualification'];
        $generalInformation->tour_id = $content['tour_id'];
        $generalInformation->save();
  
        return response()->json([
          'success' => true,
          'message' => 'Información general actualizado',
          'data' => $generalInformation,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => true,
          'message' => 'Información general no actualizado',
          'err' => $ex,
        ], 200);
      }
    }
}