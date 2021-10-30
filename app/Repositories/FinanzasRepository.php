<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\ExchangeRate;

class FinanzasRepository {

    public function getTypeChange() {
      try {
        $data = ExchangeRate::all();
        return $data;
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }

    public function putTypeChange($value) {
      try {
        $data = ExchangeRate::where('id', 1)
          ->update(['change' => $value]);
        return $data;
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }

    public function getPaquetes() {

    }

    public function getReservations() {
        
    }
}