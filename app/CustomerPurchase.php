<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerPurchase extends Model
{
    protected $table = "customer_purchase_order";
    protected $fillable = [
        'customer_id',
        'purchase_order_id'
    ];
}
