<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $table = "tours";

    public function vendor()
    {
        return $this->belongsTo(Vendor::class);
    }
}

