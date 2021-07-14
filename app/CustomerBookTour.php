<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomerBookTour extends Model
{
    protected $table = "customer_book_tour";
    protected $fillable = [
        'reservation_date',
        'num_adults',
        'num_childrens',
        'num_infants',
        'total',
        'amount',
        'tour_id',
        'purchase_order_id'
    ];
}
