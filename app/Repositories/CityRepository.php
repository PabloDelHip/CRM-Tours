<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\Interfaces\CityInterface;
use App\Http\Controllers\ApiController;
use App\City;

class CityRepository implements CityInterface {

    public function findById($id) {
        try {
            return City::where('id', $id)->get()->first();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

}