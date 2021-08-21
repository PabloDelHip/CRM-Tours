<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $table = "packages";// <-- El nombre personalizado de la tabla

    protected $fillable = [
        'name', 'url', 'url_image', 'adult_price', 'child_price','status'
    ];
}
