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
            if(isset($request->paquetes)) {
                $paquetes = $request->paquetes;
                unset($request['paquetes']);
            }
            $purchase_order_data = $this->repository->create($request);
            $dataPurchaseOrderArray = [];
            if(isset($paquetes)) {
                foreach ($paquetes as $paquete) {
                    // $purchase_order_id = $purchase_order_data->id;
                    $paquete['purchase_order_id'] = $purchase_order_data->id;
                    $dataPurchaseOrder = $this->repository->createPurcharseOrderPackage($paquete);
                    $array = array(
                        "id" => $dataPurchaseOrder['id'],
                        "index" => $dataPurchaseOrder['index']
                    );
                    array_push($dataPurchaseOrderArray, $array);
                }
            }

            foreach ($tours as $tour) {
                foreach ($dataPurchaseOrderArray as $item) {
                    if($item['index'] === $tour['index']) {
                        $tour['idOrderPackage'] = $item['id'];        
                    }    
                }
                $tour['purchase_order_id'] = $purchase_order_data->id;
                $customer_book_tour_create = $this->repository->createCustomerBookTour($tour);
            }
            
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
            $customer= $request->customer;
            $tours= $request->tours;
            $paquetes = $request->paquetes;
            unset($request['customer']);
            unset($request['tours']);
            unset($request['paquetes']);
            $this->repository->update($request, $id);
            $customerBookTours = $this->customerBookTourRepository->findById($id);
            $this->repository->deletePackageOrder($id);
            $this->repository->deleteCustomerBookTour($id);
            $dataPurchaseOrderArray = [];
            foreach ($paquetes as $paquete) {
                $paquete['purchase_order_id'] = $id;
                $dataPurchaseOrder = $this->repository->createPurcharseOrderPackage($paquete);
                $array = array(
                    "id" => $dataPurchaseOrder['id'],
                    "index" => $dataPurchaseOrder['index']
                );
                array_push($dataPurchaseOrderArray, $array);
            }
            foreach ($tours as $tour) {
                foreach ($dataPurchaseOrderArray as $item) {
                    if($item['index'] === $tour['index']) {
                        $tour['idOrderPackage'] = $item['id'];        
                    }
                    echo 'Item:: '.$item['index'].'<br>';    
                }
                echo $tour['index'].'<br>';
                $tour['purchase_order_id'] = $id;
                $customer_book_tour_create = $this->repository->createCustomerBookTour($tour);
            }
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
                $purchase_order['tours'] = $this->customerBookTourRepository->findById($purchase_order->purchaseOrder['id']);
                $purchase_order['num_tours'] = count($purchase_order['tours']);
            }
            return $this->showAll($purchase_order_data);
        } catch (MassAssignmentException $th) {
            return  $this->errorResponse($th, 500);
        }
    }
}
