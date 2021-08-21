<?php

namespace App\Traits;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\MassAssignmentException;
use File;
use Response;

trait ApiResponser
{
    private function successResponse($data, $code) {
        return response()->json($data, $code);
    }

    protected function errorResponse($message, $code) {
        return response()->json(['error' => $message, 'code' => $code], $code); 
    }

    protected function showAll($collection, $code = 200) {
        if($collection === null) {
            return $this->objectNull();
        }
        return $this->successResponse(['data' => $collection], $code);
    }

    protected function objectNull() {
        return $this->successResponse(['data' => []], 204);
    }

    protected function saveFileBase64($fileBase64, $nameFile, string $prefixName, string $routeFile)
    {
        if ($fileBase64) {
            $extension = explode('/', explode(':', substr($fileBase64, 0, strpos($fileBase64, ';')))[1])[1];
            
            $replace = substr($fileBase64, 0, strpos($fileBase64, ',') + 1);

            $file = str_replace($replace, '', $fileBase64);
            $file = str_replace(' ', '+', $file);
            $fileName = $prefixName . "-" . Str::random(20) . '.' . $extension;
            //$fileName = $nameFile;
            /* if (!$fileName) {
                $fileName = $prefixName . "-" . Str::random(20) . '.' . $extension;
                $nameFile = $fileName;
            } */
            $successFile = Storage::disk($routeFile)->put($fileName, base64_decode($file));
        }

        return $fileName;
    }
}