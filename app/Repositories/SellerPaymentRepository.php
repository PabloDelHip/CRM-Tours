<?php

namespace App\Repositories;
use App\SellerPayment;
use DB;
use Carbon\Carbon;

class SellerPaymentRepository {

  public function findByUserId($id, $month = 0, $year = 0, $date = 0) {
    try {
      $data = SellerPayment::select("seller_id",
      "user_id",
        DB::raw("sum(amount) as pagado")
      )
      ->where('seller_id', '=' ,$id)
      ->where('status', '=' ,1);
      if($date) {
        $data = $data->whereDate('month_paying', $date);
    }
    else if($year) {
        $data = $data->whereYear('month_paying',$year);
        
        if($month) {
            $data = $data->whereMonth('month_paying', $month);
        }
    }
    $data = $data->groupBy('user_id')
    ->groupBy('seller_id')->get();
      return $data;
    } catch (MassAssignmentException $ex) {
        return $ex;
    }
  }

  public function findPayByUserId($id, $month = 0, $year = 0, $date = 0) {
    try {
      $data = SellerPayment::where('seller_id', '=' ,$id)
      ->where('status', '=' ,1)
      ->with('seller.profile')
      ->with('user.profile');
      if($date) {
        $data = $data->whereDate('month_paying', $date);
    }
    else if($year) {
        $data = $data->whereYear('month_paying',$year);
        
        if($month) {
            $data = $data->whereMonth('month_paying', $month);
        }
    }
    $data = $data->get();
      return $data;
    } catch (MassAssignmentException $ex) {
        return $ex;
    }
  }

  public function savePayments($data){
    try {
      $seller_payment = new SellerPayment();
      $seller_payment->amount = $data['amount'];
      if( isset($data['comment']) ) {
        $seller_payment->comment = $data['comment'];
      }
      $seller_payment->user_id = $data['user_id'];
      $seller_payment->seller_id = $data['seller_id'];
      $seller_payment->month_paying = $data['month_paying'];
      $seller_payment->save();
      return $seller_payment;
    } catch (MassAssignmentException $ex) {
        return $ex;
    }
  }

  public function deletePaymentSeller($idSeller) {
    try {
      return SellerPayment::where('id', $idSeller)
            ->update(['status' => false]);
      
    } catch (MassAssignmentException $ex) {
        return $ex;
    }
  }

  public function findByRange($date_one, $date_two) {
    try {
      $from = $date_one;
      $to = $date_two;
      return SellerPayment::whereBetween(DB::raw('DATE(created_at)'), array($from, $to))
        ->with('seller.profile')
        ->with('user.profile') 
        ->get();
    } catch (MassAssignmentException $ex) {
      return $ex;
    }
  } 

}