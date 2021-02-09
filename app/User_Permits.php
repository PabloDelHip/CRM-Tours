<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User_permits extends Authenticatable implements JWTSubject
{
  protected $table = "users_permits"; // <-- El nombre personalizado

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  /**
   * Get the identifier that will be stored in the subject claim of the JWT.
   *
   * @return mixed
   */
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  /**
   * Return a key value array, containing any custom claims to be added to the JWT.
   *
   * @return array
   */
  public function getJWTCustomClaims()
  {
    return [];
  }

  public function module()
  {
    return $this->belongsToMany(User_Modules::class, 'id_module');
  }

  protected $fillable = [
    'id_user', 'id_module', 'watch', 'add', 'edit', 'delete',
  ];
}
