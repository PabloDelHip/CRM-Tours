<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Repositories\PurchaseOrderPackageRepository;

class PurchaseOrderPackage extends ApiController
{
    private $repository;

    public function __construct(PurchaseOrderPackageRepository $repository)
    {
        $this->repository = $repository;
    }

    public function find($id) {
        try {
            
            $data = $this->repository->find($id);
            return $this->showAll($data);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
        echo 'soy id:: '.$id;
    }
}
