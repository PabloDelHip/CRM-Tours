<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PurchaseOrdersRequest;
use App\Http\Requests\CustomerBookTourCreateRequest;
use App\Repositories\PurcharseOrdersRepository;
use App\Repositories\CustomerRepository;
use App\Repositories\CustomerBookTourRepository;
use App\Interfaces\GeneralInterface;
use App\Http\Controllers\ApiController;
use Illuminate\Database\Eloquent\MassAssignmentException;

class PurcharseOrdersController extends ApiController implements GeneralInterface
{
    private $repository;

    public function __construct(PurcharseOrdersRepository $repository, 
        CustomerRepository $customerRepository,
        CustomerBookTourRepository $customerBookTourRepository)
    {
        $this->repository = $repository;
        $this->customerRepository = $customerRepository;
        $this->customerBookTourRepository = $customerBookTourRepository;
    }

    public function create(PurchaseOrdersRequest $request) {
        try {
            $tours = $request->tours;
            unset($request['tours']);
            $purchase_order_data = $this->repository->create($request);
            foreach ($tours as $tour) {
                $tour['purchase_order_id'] = $purchase_order_data->id;
                $customer_book_tour_create = $this->repository->createCustomerBookTour($tour);
            }
            //Si el suaurio no existe recuerda crearlo en la base de datos
            $customer = $this->customerRepository->findByEmail($request->customer['email']);
            if($customer === null) {
               $customer = $this->customerRepository->create($request->customer);
            }
            
            $this->repository
                ->createCustomerPurchase($purchase_order_data->id, $customer->id, $purchase_order_data->user_id);
            return $this->showAll($purchase_order_data,201);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function update(PurchaseOrdersRequest $request, $id) {
        try {
            $this->repository->update($request, $id);
            $purchase_order_data = $this->repository->find($id);
            return $this->showAll($purchase_order_data,201);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function find($id) {
        try {
            $purchase_order_data = $this->repository->find($id);
            return $this->showAll($purchase_order_data);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }

    public function findAll() {
        try {
            $purchase_order_data = $this->repository->findAll();
            foreach ($purchase_order_data as $purchase_order) {
                $purchase_order['num_tours'] = count($this->customerBookTourRepository->findById($purchase_order->purchaseOrder['id']));
            }
            return $this->showAll($purchase_order_data);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }
}
