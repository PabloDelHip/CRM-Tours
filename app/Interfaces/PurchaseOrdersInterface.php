<?php 
namespace App\Interfaces;
use App\Http\Requests\PurchaseOrdersRequest;

interface PurchaseOrdersInterface {
    public function createCustomerPurchase($purchase_order_id, $customer_id, $user_id);
    public function createCustomerBookTour(array $tour);
}