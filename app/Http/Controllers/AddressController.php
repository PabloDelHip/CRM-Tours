<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Address;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Exception;

class AddressController extends Controller
{
    public function getAddress($id)
    {
        try {
            $address = Address::find($id);

            return response()->json([
                'success' => true,
                'message' => 'Dirección encontrada',
                'data' => $address,
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener la dirección',
                'err' => $ex->getMessage()
            ], 500);
        }
    }

    public function post(Request $request)
    {
        try {
            $content = $request->all();

            $address = new Address();
            $address->postal_code = $content['postal_code'];
            $address->street = $content['street'];
            $address->street_one = $content['street_one'];
            $address->street_two = $content['street_two'];
            $address->references = $content['references'];
            $address->suburb = $content['suburb'];
            $address->interior_num = $content['interior_num'];
            $address->exterior_num = $content['exterior_num'];
            $address->country_id = $content['country_id'];
            $address->state_id = $content['state_id'];
            $address->city_id = $content['city_id'];

            $address->save();

            return response()->json([
                'success' => true,
                'message' => 'Dirección insertada',
                'data' => $address,
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Dirección no insertada',
                'err' => $ex->getMessage()
            ], 500);
        }
    }

    public function put(Request $request, $id)
    {
        try {
            $address = Address::find($id);
            $content = $request->all();

            $address->postal_code = $content['postal_code'];
            $address->street = $content['street'];
            $address->street_one = $content['street_one'];
            $address->street_two = $content['street_two'];
            $address->references = $content['references'];
            $address->suburb = $content['suburb'];
            $address->interior_num = $content['interior_num'];
            $address->exterior_num = $content['exterior_num'];
            $address->country_id = $content['country_id'];
            $address->state_id = $content['state_id'];
            $address->city_id = $content['city_id'];

            $address->save();

            return response()->json([
                'success' => true,
                'message' => 'Dirección actualizada',
                'data' => $address,
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Dirección no actualizada',
                'err' => $ex->getMessage()
            ], 500);
        }
    }
}
