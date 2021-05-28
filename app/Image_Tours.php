<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image_Tours extends Model
{
    protected $table = "image_tours";

    protected $casts = [
      'status' => 'boolean',
    ];
}