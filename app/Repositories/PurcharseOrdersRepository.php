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
            $purchase_order = new PurchaseOrder();
            $purchase_order->total = $request['total'];
            $purchase_order->amount = $request['amount'];
            $purchase_order->expected_date = $request['expected_date'];
            $purchase_order->type = $request['type'];
            $purchase_order->status = $request['status'];
            $purchase_order->total = $request['total'];
            $purchase_order->user_id = $request['user_id'];
            $purchase_order->descuento = (int)$request['descuento'];
            
            $purchase_order->save();
            return $purchase_order;
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
            $customerPurchase = CustomerPurchase::where('purchase_order_id', $id)
                                    ->with('customer')
                                    ->with('purchaseOrder')
                                    ->get();
            
            $purchase_order_id = $customerPurchase[0]["purchase_order_id"];
            $customerPurchase[0]["book_tours"] = CustomerBookTour::where('purchase_order_id', $purchase_order_id)
                                                ->with('tour')
                                                ->get();
            return $customerPurchase;
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

    public function updateCustomerBookTour(array $tour) {
        try {
            unset($tour['actividad']);
            return CustomerBookTour::where('id', $tour['id'])
                    ->update($tour);
            
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function deleteCustomerBookTour($id) {
        try {
            return CustomerBookTour::where('id', $id)
                    ->delete();
            
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }
}