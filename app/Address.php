<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = "address";// <-- El nombre personalizado de la tabla

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'postal_code', 'street', 'street_one', 'street_two', 'references', 'suburb', 'interior_num', 'exterior_num', 'country_id', 'state_id', 'city_id',
    ];
}