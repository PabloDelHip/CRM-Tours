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
use App\Purchase_order_package;
use DB;

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
            $customerPurchase[0]["paquetes"] = Purchase_order_package::where('purchase_order_id', $purchase_order_id)
                ->with('package')
                ->get();
            return $customerPurchase;
            return PurchaseOrder::where('id', $id)->get()->first();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function findByUserId($userId) {
        try {
            return CustomerPurchase::where('user_id', $userId)
                                    ->with('customer')
                                    ->with('purchaseOrder')
                                    ->get();
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

    public function userSales($month = 0, $year = 0, $date = 0) {
        $data = PurchaseOrder::select("user_id",
            DB::raw("count(user_id) as tours_vendidos, sum(total) as total_vendido"),)
            ->with('user.profile');
        if($date) {
            $data = $data->whereDate('created_at', $date);
        }
        else if($year) {
            $data = $data->whereYear('created_at',$year);
            
            if($month) {
                $data = $data->whereMonth('created_at', $month);
            }
        }
        $data = $data->groupBy('user_id')
            ->get();
        return $data;
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

    public function createPurcharseOrderPackage(array $paquete) {
        try {
            $purchase_order_package = new Purchase_order_package();
            $purchase_order_package->package_id = $paquete['package_id'];
            $purchase_order_package->purchase_order_id = $paquete['purchase_order_id'];
            $purchase_order_package->num_adults = $paquete['num_adults'];
            $purchase_order_package->num_childrens = $paquete['num_childrens'];
            $purchase_order_package->num_infants = $paquete['num_infants'];
            $purchase_order_package->total = $paquete['total'];
            $purchase_order_package->amount = $paquete['amount'];
            $purchase_order_package->index = $paquete['index'];
            $purchase_order_package->save();
            return $purchase_order_package;
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function findByIdPackagePurchase($purchase_order_id) {
        try {
            return Purchase_order_package::where('purchase_order_id', $purchase_order_id)->get();
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

    public function deletePackageOrder($id_purchase) {
        try {
            return Purchase_order_package::where('purchase_order_id', $id_purchase)->delete();
            
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function deleteCustomerBookTour($id_purchase) {
        try {
            return CustomerBookTour::where('purchase_order_id', $id_purchase)->delete();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function getPurcharseOrderByIdUser($idUser) {
        try {
            return PurchaseOrder::where('user_id', $idUser)->get();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

    public function getToursSold() {
        try {
            return CustomerBookTour::where('reservation_date', '2021-08-26')->get();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }
}