<?php

namespace App\Traits;

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
}