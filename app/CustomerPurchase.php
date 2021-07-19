<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerPurchase extends Model
{
    protected $table = "customers_purchase_orders";
    protected $fillable = [
        'customer_id',
        'purchase_order_id',
        'user_id'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function purchaseOrder()
    {
        return $this->belongsTo(PurchaseOrder::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
