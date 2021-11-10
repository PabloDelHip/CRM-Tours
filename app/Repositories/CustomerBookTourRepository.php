<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\Http\Requests\PurchaseOrdersRequest;
use App\Interfaces\CustomerBookTourInterface;
use App\Http\Controllers\ApiController;
use App\CustomerBookTour;

class CustomerBookTourRepository implements CustomerBookTourInterface {

    public function findById($id) {
        try {
            return CustomerBookTour::where('purchase_order_id', $id)
            ->with('tour.vendor')
            ->get();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

}