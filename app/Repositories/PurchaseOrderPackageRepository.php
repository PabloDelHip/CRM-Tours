<?php

namespace App\Repositories;
use App\Purchase_order_package;
use App\CustomerBookTour;

class PurchaseOrderPackageRepository {

  public function find($id) {
    try {
      $data = Purchase_order_package::where('id',$id)->with('package')
      ->get();

      $data[0]['customerBook'] = CustomerBookTour::where('idOrderPackage', $id)->with('tour')->get();
      return $data;
    } catch (MassAssignmentException $ex) {
        return $ex;
    }
  }

}