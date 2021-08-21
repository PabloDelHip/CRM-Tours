<?php 
namespace App\Interfaces;

interface PackagesInterface {
    public function create($package);
    public function find($id);
    public function findAll();
    public function update($id);
    public function addTour($data);
    public function findPackageTour($idPackage);
    public function deleteTour($idTour, $idPackage);
}