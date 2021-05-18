<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories_Tours_Pivot extends Model
{
    protected $table = "categories_tours_pivot";

    public function categories_tours()
    {
        return $this->belongsTo(Categorie_Tour::class);
    }

    public function tours()
    {
        return $this->belongsTo(Tour::class, 'tour_id');
    }
}
