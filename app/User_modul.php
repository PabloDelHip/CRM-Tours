<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_modul extends Model
{
  protected $table = "user_modul"; // <-- El nombre personalizado

  public function module()
  {
    return $this->hasMany(Moduls::class, 'id');
  }

  protected $fillable = [
    'id_user', 'id_module', 'watch', 'add', 'edit', 'delete',
  ];
}
