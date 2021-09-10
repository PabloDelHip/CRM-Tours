<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurcharseOrderPackageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purcharse_order_package', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('package_id');
            $table->unsignedBigInteger('purchase_order_id');
            $table->integer('num_adults')->nullable();
            $table->integer('num_childrens')->nullable();
            $table->integer('num_infants')->nullable();
            $table->float('total', 8, 2)->nullable();
            $table->float('amount', 8, 2)->nullable();
            $table->timestamps();
        });

        Schema::table('purcharse_order_package', function($table) {
            $table->foreign('package_id')
                    ->references('id')
                    ->on('packages')
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
        Schema::dropIfExists('purcharse_order_package');
    }
}
