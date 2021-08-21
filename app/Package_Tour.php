<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package_Tour extends Model
{
    protected $table = "packages_tours";// <-- El nombre personalizado de la tabla
    protected $fillable = [
        'package_id', 'tour_id'
    ];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }
}
