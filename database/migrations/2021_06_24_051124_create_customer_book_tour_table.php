<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerBookTourTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_book_tour', function (Blueprint $table) {
            $table->id();
            $table->date('reservation date')->nullable();
            $table->integer('num_adults')->nullable();
            $table->integer('num_childrens')->nullable();
            $table->integer('num_infants')->nullable();
            $table->float('total', 8, 2)->nullable();
            $table->float('amount', 8, 2)->nullable();
            $table->unsignedBigInteger('tour_id');
            $table->unsignedBigInteger('purchase_order_id');
            $table->timestamps();
        });

        Schema::table('customer_book_tour', function($table) {
            $table->foreign('tour_id')
                    ->references('id')
                    ->on('tours')
                    ->onDelete('cascade');
            $table->foreign('purchase_order_id')
                    ->references('id')
                    ->on('purchase_orders')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer_book_tour');
    }
}
