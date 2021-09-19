<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase_order_package extends Model
{
    protected $table = "purcharse_order_package";

    protected $fillable = [
        'package_id',
        'purchase_order_id',
        'num_adults',
        'num_childrens',
        'num_infants',
        'total',
        'amount',
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
