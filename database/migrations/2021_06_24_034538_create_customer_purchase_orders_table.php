<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerPurchaseOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->float('total', 8, 2)->nullable();
            $table->float('amount', 8, 2)->nullable();
            $table->date('expected date')->nullable();
            $table->string('type', 60);
            $table->longText('labels');
            $table->string('status', 60);
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
        });

        Schema::table('purchase_orders', function($table) {
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
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
        Schema::dropIfExists('purchase_orders');
    }
}
