<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PurchaseOrdersRequest;
use App\Repositories\PurcharseOrdersRepository;
use App\Interfaces\GeneralInterface;
use App\Http\Controllers\ApiController;
use Illuminate\Database\Eloquent\MassAssignmentException;

class PurcharseOrdersController extends ApiController implements GeneralInterface
{
    private $repository;

    public function __construct(PurcharseOrdersRepository $repository)
    {
        $this->repository = $repository;
    }

    public function create(PurchaseOrdersRequest $request) {
        try {
            $purchase_order_data = $this->repository->create($request);
            return $this->showAll($purchase_order_data,201);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function update(PurchaseOrdersRequest $request, $id) {
        
    }

    public function find($id) {

    }

    public function findAll() {

    }
}
