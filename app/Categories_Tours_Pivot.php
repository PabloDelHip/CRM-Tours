<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories_Tours_Pivot extends Model
{
    protected $table = "categories_tours_pivot";
    protected $fillable = [
        'categories_tours_id', 'tour_id'
    ];

    public function categories_tours()
    {
        return $this->belongsTo(Categorie_Tour::class);
    }

    public function tours()
    {
        return $this->belongsTo(Tour::class, 'tour_id');
    }
}
