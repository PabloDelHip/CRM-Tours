<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\Http\Requests\PurchaseOrdersRequest;
use App\Interfaces\CustomerInterface;
use App\Http\Controllers\ApiController;
use App\Customer;

class CustomerRepository implements CustomerInterface {

    public function findByEmail($email) {
        try {
            return Customer::where('email', $email)
            ->with('country')
            ->with('state')
            ->with('city')->get()->first();
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }
    public function create($customer) {
        try {
            return Customer::create($customer);
        } catch (MassAssignmentException $ex) {
            return $ex;
        }
    }

}