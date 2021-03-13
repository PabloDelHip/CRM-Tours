<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Moduls extends Model 
{
  protected $table = "moduls"; // <-- El nombre personalizado

  public function permits()
  {
    return $this->belongsToMany(User_modul::class, 'user_id')->withPivot('user_id','module_id');
  }

  protected $fillable = [
    'id_module', 'name', 
  ];
}
