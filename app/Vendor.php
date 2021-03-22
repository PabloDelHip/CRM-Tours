<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $table = "vendors";

    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
