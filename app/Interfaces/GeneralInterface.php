<?php 
namespace App\Interfaces;
use App\Http\Requests\PurchaseOrdersRequest;

interface GeneralInterface {
    public function create(PurchaseOrdersRequest $request);
    public function update(PurchaseOrdersRequest $request, $id);
    public function find($id);
    public function findAll();
}