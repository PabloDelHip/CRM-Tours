<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\Http\Requests\PurchaseOrdersRequest;
use App\Interfaces\GeneralInterface;
use App\Http\Controllers\ApiController;
use App\PurchaseOrder;

class PurcharseOrdersRepository implements GeneralInterface {
    
    //public $fillable = []

    public function create(PurchaseOrdersRequest $request) {
        try {
            return PurchaseOrder::create($request->all());
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function update(PurchaseOrdersRequest $request, $id) {
        
    }

    public function find($id) {

    }

    public function findAll() {

    }

}