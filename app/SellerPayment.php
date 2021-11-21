<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SellerPayment extends Model
{
    protected $table = "seller_payments";

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    // public function tours()
    // {
    //     return $this->belongsTo(Tour::class, 'tour_id');
    // }
}
