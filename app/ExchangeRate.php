<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExchangeRate extends Model
{
    public $timestamps = false;
    protected $table = "exchange_rate";
}
