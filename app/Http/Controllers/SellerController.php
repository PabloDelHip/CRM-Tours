<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\SellerPaymentRepository;

class SellerController extends ApiController
{
    private $sellerPaymentRepository;

    public function __construct( SellerPaymentRepository $sellerPaymentRepository) {
        $this->sellerPaymentRepository = $sellerPaymentRepository;
    }

    public function findByRange(Request $request) {
        $date_one = $request->query('date_one');
        $date_two = $request->query('date_two');

        $data = $this->sellerPaymentRepository
        ->findByRange($date_one, $date_two);

        return $this->showAll($data);
    }
}
