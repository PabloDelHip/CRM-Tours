<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Repositories\PackagesRepository;

class PackageController extends ApiController
{
    private $packagesrepository;

    public function __construct(PackagesRepository $packagesrepository)
    {
        $this->packagesrepository = $packagesrepository;
    }

    public function create(Request $request) {
        $paquete = $request->all();
        //$paqueteImage = $this->saveFileBase64($paquete['url_image'], 'paquete', 'tour-main', 'images-products-tours');
        //$paquete['url_image'] = $paqueteImage; 
        try {
            $package = $this->packagesrepository->create($paquete);
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function find($id) {
        try {
            $package = $this->packagesrepository->find($id);
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function findAll() {
        try {
            $package = $this->packagesrepository->findAll();
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function update(Request $request, $id) {
        try {
            $package = $this->packagesrepository->create($request->all(), $id);
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function addTour(Request $request) {
        try {
            $package = $this->packagesrepository->addTour($request->all());
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function findPackageTour($idPackage) {
        try {
            $package = $this->packagesrepository->findPackageTour($idPackage);
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function deleteTour($idTour, $idPackage) {
        try {
            $package = $this->packagesrepository->deleteTour($idTour, $idPackage);
            return $this->showAll($package);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }
}
