<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories_Tours_Pivot;
use App\Image_Tours;
use App\Tour;
use App\Seo_Tour;
use App\General_Information;
use App\Operation_Tour;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\MassAssignmentException;
use File;
use Response;

class ToursController extends Controller
{
    public function getTours()
    {
        try {
            $tours = Tour::get();

            foreach ($tours as $tour) {
                if ($tour->url_image) {
                    $tour->url_image = Storage::disk('images-products-tours')->url($tour->url_image);
                }
            }

            return response()->json([
                'success' => true,
                'message' => 'Tours encontrados de forma correcta',
                'data' => $tours
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tours',
                'err' => $ex->getMessage()
            ], 500);
        }
    }

    public function getListCategorie($id_categorie)
    {
        try {

            $tours = Categories_Tours_Pivot::with('tours')
                ->where('categories_tours_id', '=', $id_categorie)
                ->get();

            foreach ($tours as $tour) {

                $general_information = General_Information::where('tour_id', '=', $tour['tour_id'])->get();
                $tour['tours']['duration'] = $general_information[0]['duration'];
                $tour['tours']['operation'] = Operation_Tour::where('tour_id', '=', $tour['tour_id'])->get();

                $precio_adulto = $tour['tours']['operation'][0]['adult_price'];
                $tour['tours']['operation'][0]['adult_price'] = number_format($precio_adulto, 2, '.', ',');
                $descuento = ($precio_adulto * $tour['tours']['operation'][0]['discount_rate']) / 100;
                $descuento = $precio_adulto - $descuento;
                $tour['tours']['operation'][0]['discount_price'] = number_format($descuento, 2, '.', ',');
                //dd($tour['tours']['operation'][0]['adult_price']);
            }

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

    public function getTour($id)
    {
        $categoria = Categories_Tours_Pivot::where('tour_id', $id)->first();
        try {
            $tour = Tour::where('id', '=', $id)->first();

            if ($tour->url_image) {
                $tour->url_image = Storage::disk('images-products-tours')->url($tour->url_image);
            }
            $tour->categoria = $categoria['categories_tours_id'];

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

    public function getInfoTourName($name_tour)
    {
        try {
            $name_tour = str_replace("-", " ", $name_tour);
            $id_tour = Tour::select('id')
                ->where('name', '=', $name_tour)
                ->where('status', '=', 1)
                ->get();
            $id_tour = $id_tour[0]['id'];

            $tour = Tour::where('id', '=', $id_tour)
                ->where('status', '=', 1)
                ->get();

            $seo_tour = Seo_Tour::where('tour_id', '=', $id_tour)
                ->get();

            $general_information = General_Information::where('tour_id', '=', $id_tour)
                ->get();

            $operation_tour = Operation_Tour::where('tour_id', '=', $id_tour)
                ->get();

            $images_tours = Image_Tours::where('tour_id', '=', $id_tour)
                ->where('status', '=', 1)
                ->get();


            $data_tour = [
                "tour" => $tour,
                "seo_tour" => $seo_tour,
                "general_information" => $general_information,
                "operation_tour" => $operation_tour,
                "image_tour" => $images_tours
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

    public function post(Request $request)
    {
        try {
            $content = $request->all();

            $tour = new Tour();
            $tour->name = $content['name'];
            $tour->assisted_purchase = $content['assisted_purchase'];
            $tour->url = $content['url'];
            $tour->status = $content['status'];
            $tour->vendor_id = $content['vendor_id'];

            $tour->url_image = $this->saveFileBase64($content['url_image'], $tour->url_image, 'tour-main', 'images-products-tours');

            $tour->save();
            $categories_tours_pivot = new Categories_Tours_Pivot();
            $categories_tours_pivot->categories_tours_id = $content['categoria'];
            $categories_tours_pivot->tour_id = $tour['id'];
            $categories_tours_pivot->save();
            return response()->json([
                'success' => true,
                'message' => 'Tour insertado',
                'data' => $tour,
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Tour no insertado',
                'err' => $ex,
            ], 500); 
        }
    }

    public function put(Request $request, $tourId)
    {
        try {
            $content = $request->all();

            $tour = Tour::find($tourId);
            $tour->name = $content['name'];
            $tour->assisted_purchase = $content['assisted_purchase'];
            $tour->url = $content['url'];
            $tour->status = $content['status'];
            $tour->vendor_id = $content['vendor_id'];

            $tour->url_image = $this->saveFileBase64($content['url_image'], $tour->url_image, 'tour-main', 'images-products-tours');

            $tour->save();
            $categoria = Categories_Tours_Pivot::where('tour_id', $tourId)->first();
            if($categoria) {
                Categories_Tours_Pivot::where('tour_id', $tourId)
                ->update(['categories_tours_id' => $content['categoria']]);    
            }
            else {
                $categories_tours_pivot = new Categories_Tours_Pivot();
                $categories_tours_pivot->categories_tours_id = $content['categoria'];
                $categories_tours_pivot->tour_id = $tourId;
                $categories_tours_pivot->save();
            }

            return response()->json([
                'success' => true,
                'message' => 'Tour actualizado',
                'data' => $tour,
            ], 200);
        } catch (Exception $ex) {
            return response()->json([
                'success' => false,
                'message' => 'Tour no actualizado',
                'err' => $ex,
            ], 500);
        }
    }

    public function getInfoTour($name_tour)
    {
        try {
            $name_tour = str_replace("-", " ", $name_tour);
            $id_tour = Tour::select('id')
                ->where('name', '=', $name_tour)
                ->where('status', '=', 1)
                ->get();
            $id_tour = $id_tour[0]['id'];

            $tour = Tour::where('id', '=', $id_tour)
                ->where('status', '=', 1)
                ->get();

            $seo_tour = Seo_Tour::where('tour_id', '=', $id_tour)
                ->get();

            $general_information = General_Information::where('tour_id', '=', $id_tour)
                ->get();

            $operation_tour = Operation_Tour::where('tour_id', '=', $id_tour)
                ->get();

            $images_tours = Image_Tours::where('tour_id', '=', $id_tour)
                ->where('status', '=', 1)
                ->get();


            $data_tour = [
                "tour" => $tour,
                "seo_tour" => $seo_tour,
                "general_information" => $general_information,
                "operation_tour" => $operation_tour,
                "image_tour" => $images_tours
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

    public function getListTours()
    {
        try {
            $tours = Tour::with('vendor')
                ->get();

            return response()->json([
                'succes' => true,
                'message' => 'Tours encontrados de forma correcta',
                'data' => $tours
            ], 200);
        } catch (MassAssignmentException $err) {
            return response()->json([
                'succes' => false,
                'message' => 'error al obtener tours',
                'err' => $err->getMessage()
            ], 500);
        }
    }

    public function saveFileBase64($fileBase64, $nameFile, string $prefixName, string $routeFile)
    {
        if ($fileBase64) {
            $extension = explode('/', explode(':', substr($fileBase64, 0, strpos($fileBase64, ';')))[1])[1];
            $replace = substr($fileBase64, 0, strpos($fileBase64, ',') + 1);

            $file = str_replace($replace, '', $fileBase64);
            $file = str_replace(' ', '+', $file);

            $fileName = $nameFile;
            if (!$fileName) {
                $fileName = $prefixName . "-" . Str::random(20) . '.' . $extension;
                $nameFile = $fileName;
            }
            $successFile = Storage::disk($routeFile)->put($fileName, base64_decode($file));
        }

        return $nameFile;
    }

    public function imagen($slug) {
        $path = storage_path() . '/app/public/images/products/tours/' . $slug; // Podés poner cualquier ubicacion que quieras dentro del storage

        if(!File::exists($path)){
            return 'no esta';
        } // Si el archivo no existe

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    }
}
