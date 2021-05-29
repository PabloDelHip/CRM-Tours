<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Operation_Tour;
use Exception;

class OperationTourController extends Controller
{
    public function getOperationTourByTourId($id){
        try {
            $operationTour = Operation_Tour::where('tour_id', '=', $id)->first();
        
            return response()->json([
                'success' => true,
                'message' => 'OperationTour encontrado de forma correcta',
                'data' => $operationTour
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'success' => false,
                'message' => 'Error OperationTours',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function post(Request $request){
      try{
        $content = $request->all();
  
        $operationTour = new Operation_Tour();
        $operationTour->adult_price = $content['adult_price'];
        $operationTour->child_price = $content['child_price'];
        $operationTour->discount_rate = $content['discount_rate'];
        $operationTour->ticket_text = $content['ticket_text'];
        $operationTour->mon = $content['mon'];
        $operationTour->tue = $content['tue'];
        $operationTour->wed = $content['wed'];
        $operationTour->thu = $content['thu'];
        $operationTour->fri = $content['fri'];
        $operationTour->sat = $content['sat'];
        $operationTour->sun = $content['sun'];
        $operationTour->days_advance_to_reserve = $content['days_advance_to_reserve'];
        $operationTour->tour_id = $content['tour_id'];
        $operationTour->save();
  
        return response()->json([
          'success' => true,
          'message' => 'OperationTour insertado',
          'data' => $operationTour,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => false,
          'message' => 'OperationTour no insertado',
          'err' => $ex,
        ], 500);
      }
    }

    public function put(Request $request, $operationTourId){
      try{
        $content = $request->all();
  
        $operationTour = Operation_Tour::find($operationTourId);
        $operationTour->adult_price = $content['adult_price'];
        $operationTour->child_price = $content['child_price'];
        $operationTour->discount_rate = $content['discount_rate'];
        $operationTour->ticket_text = $content['ticket_text'];
        $operationTour->mon = $content['mon'];
        $operationTour->tue = $content['tue'];
        $operationTour->wed = $content['wed'];
        $operationTour->thu = $content['thu'];
        $operationTour->fri = $content['fri'];
        $operationTour->sat = $content['sat'];
        $operationTour->sun = $content['sun'];
        $operationTour->days_advance_to_reserve = $content['days_advance_to_reserve'];
        $operationTour->tour_id = $content['tour_id'];
        $operationTour->save();
  
        return response()->json([
          'success' => true,
          'message' => 'OperationTour actualizado',
          'data' => $operationTour,
        ], 200);
      }
      catch (Exception $ex){
        return response()->json([
          'success' => false,
          'message' => 'OperationTour no actualizado',
          'err' => $ex,
        ], 500);
      }
    }
}