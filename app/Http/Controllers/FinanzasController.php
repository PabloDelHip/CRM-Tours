<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\FinanzasRepository;
use App\Repositories\UsersRepository;
use App\Repositories\PurcharseOrdersRepository;

class FinanzasController extends ApiController
{
    private $finanzasRepository;
    private $usersRepository;
    private $purchaseOrdersRepository;

    public function __construct(
        FinanzasRepository $finanzasRepository,
        UsersRepository $usersRepository,
        PurcharseOrdersRepository $purchaseOrdersRepository
    ) {
        $this->finanzasRepository = $finanzasRepository;
        $this->usersRepository = $usersRepository;
        $this->purchaseOrdersRepository = $purchaseOrdersRepository;
    }

    public function getTypeChange() {
        try {   
            $data = $this->finanzasRepository->getTypeChange();
            return $this->showAll($data);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function putTypeChange(Request $request) {
        try {
            $data = $this->finanzasRepository->putTypeChange($request['change']);
            return $this->showAll($data);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function getUsers() {
        try {
            $users = $this->usersRepository->getUsers();
            foreach ($users as $user) {
                $numVentas = $this->purchaseOrdersRepository->getPurcharseOrderByIdUser($user['id']);
                $numVentas  = $numVentas->count();
                $user['num_ventas'] = $numVentas;
            }
            return $this->showAll($users);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function getVentasByIdUser($userId) {
        try {
            $ventas = $this->purchaseOrdersRepository->findByUserId($userId);
            return $this->showAll($ventas);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function getToursSold() {
        try {
            $ventas = $this->purchaseOrdersRepository->getToursSold();
            return $this->showAll($ventas);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function getReservations() {
        
    }
    
}
