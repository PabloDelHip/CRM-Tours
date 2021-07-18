<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\Http\Requests\PurchaseOrdersRequest;
use App\Interfaces\GeneralInterface;
use App\Interfaces\PurchaseOrdersInterface;
use App\Http\Controllers\ApiController;
use App\PurchaseOrder;
use App\CustomerPurchase;
use App\CustomerBookTour;

class PurcharseOrdersRepository implements GeneralInterface, PurchaseOrdersInterface {
    
    //public $fillable = []

    public function create(PurchaseOrdersRequest $request) {
        try {
            return PurchaseOrder::create($request->all());
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function update(PurchaseOrdersRequest $request, $id) {
        try {
            return PurchaseOrder::where('id', $id)
                    ->update($request->all());
            
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function find($id) {
        try {
            return PurchaseOrder::where('id', $id)->get()->first();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function findAll() {
        try {
            return CustomerPurchase::with('user.profile')
                                    ->with('customer')
                                    ->with('purchaseOrder')
                                    ->get();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }
    
    public function createCustomerPurchase($purchase_order_id, $customer_id, $user_id) {
        try {
            $dataSave = [];
            $dataSave['purchase_order_id'] = $purchase_order_id;
            $dataSave['customer_id'] = $customer_id;
            $dataSave['user_id'] = $user_id;
            return CustomerPurchase::create($dataSave);
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function createCustomerBookTour(array $tours) {
        try {
            return CustomerBookTour::create($tours);
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

}