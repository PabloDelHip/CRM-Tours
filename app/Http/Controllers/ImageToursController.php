<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image_Tours;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ImageToursController extends Controller
{
   public function getImagesTourByTourId($id)
   {
      try {
         $imagesTours = Image_Tours::where('tour_id', '=', $id)
            ->get();

         foreach ($imagesTours as $imagesTour) {
            if ($imagesTour->url_image) {
               $imagesTour->url_image = Storage::disk('images-products-tours')->url($imagesTour->url_image);
            }
         }

         return response()->json([
            'success' => true,
            'message' => 'Imágenes del tour encontrados de forma correcta',
            'data' => $imagesTours
         ], 200);
      } catch (Exception $err) {
         return response()->json([
            'success' => false,
            'message' => 'Error al obtener imagenes del tour',
            'err' => $err->getMessage()
         ], 500);
      }
   }

   public function post(Request $request)
   {
      try {
         $content = $request->all();

         $imagesTour = new Image_Tours();
         $imagesTour->url_image = $this->saveFileBase64($content['url_image'], $imagesTour->url_image, 'tour-'.$content['tour_id'], 'images-products-tours');
         $imagesTour->status = $content['status'];
         $imagesTour->tour_id = $content['tour_id'];
         $imagesTour->save();

         return response()->json([
            'success' => true,
            'message' => 'Imágen del tour insertado',
            'data' => $imagesTour,
         ], 200);
      } catch (Exception $ex) {
         return response()->json([
            'success' => false,
            'message' => 'Imágen del tour no insertado',
            'err' => $ex,
         ], 500);
      }
   }

   public function put(Request $request, $imageTourId)
   {
      try {
         $content = $request->all();

         $imagesTour = Image_Tours::find($imageTourId);
         $imagesTour->url_image = $this->saveFileBase64($content['url_image'], $imagesTour->url_image, 'tour-'.$content['tour_id'], 'images-products-tours');
         $imagesTour->status = $content['status'];
         $imagesTour->tour_id = $content['tour_id'];
         $imagesTour->save();

         return response()->json([
            'success' => true,
            'message' => 'Imágen del tour actualizado',
            'data' => $imagesTour,
         ], 200);
      } catch (Exception $ex) {
         return response()->json([
            'success' => false,
            'message' => 'Imágen del tour no actualizado',
            'err' => $ex,
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
}
