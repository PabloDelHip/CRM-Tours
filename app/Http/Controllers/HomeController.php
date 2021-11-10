<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\ProccessPdfTours;

class HomeController extends Controller
{
    public function index() {
        return view('home.inicio');
    }

    public function pdf() {
        echo 'ESTAMOS EN PEdddDxxF';
        $pdf = \PDF::loadView('reports/ejemplo')
        ->stream('ejemplo.pdf');
        return $pdf;
        // ProccessPdfTours::dispatch();
        // return view('home.inicio');
    }
}
