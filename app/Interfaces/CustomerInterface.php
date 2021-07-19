<?php 
namespace App\Interfaces;

interface CustomerInterface {
    public function findByEmail($email);
    public function create($customer);
}