<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\User;

class UsersRepository {

    public function getUsers() {
      try {
        $data = User::where('status', true)->get();
        return $data;
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }
}