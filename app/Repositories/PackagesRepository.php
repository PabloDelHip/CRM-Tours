<?php

namespace App\Repositories;
use Illuminate\Database\Eloquent\MassAssignmentException;
use App\Interfaces\PackagesInterface;
use App\Package;
use App\Package_Tour;

class PackagesRepository implements PackagesInterface {

    public function create($package, $id = 0) {
      try {
        if($id) {
          $paqueteSave = Package::find($id);
        }
        else {
          $paqueteSave = new Package();
        }
        $paqueteSave->name = $package['name'];
        $paqueteSave->url = $package['url'];
        $paqueteSave->url_image = $package['url_image'];
        $paqueteSave->status = $package['status'];
        $paqueteSave->adult_price = $package['adult_price'];
        $paqueteSave->child_price = $package['child_price'];
        $paqueteSave->save();
        return $paqueteSave;
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }

    public function find($id) {
      try {
        return Package::where('id', $id)->get()->first();
      } catch (MassAssignmentException $ex) {
          return $ex;
      }
    }

    public function findAll() {
      try {
        return Package::where('status', 0)->get();
      } catch (MassAssignmentException $ex) {
          return $ex;
      }
    }

    public function update($id) {

    }

    public function addTour($data) {
      try {
        $package = new Package_Tour();
        $package->package_id = $data['package_id'];
        $package->tour_id = $data['tour_id'];
        $package->save();
        return $package;
      } catch (MassAssignmentException $ex) {
          return $ex;
      }
    }

    public function findPackageTour($idPackage) {
      try {
        return Package_Tour::where('package_id', $idPackage)
        ->with('package')
        ->with('tour')
        ->get();
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }

    public function deleteTour($idTour,$idPackage) {
      try {
        return Package_Tour::where('tour_id', $idTour)
        ->where('package_id', $idPackage)
        ->delete();
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }

    public function findAllPackage() {
      try {
        return Package_Tour::with('package')
        ->with('tour')
        ->get();
      } catch (MassAssignmentException $ex) {
        return $ex;
      }
    }

}