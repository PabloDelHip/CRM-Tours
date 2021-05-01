<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationTourTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operation_tour', function (Blueprint $table) {
            $table->id();
            $table->float('adult_price', 8, 2)->nullable();
            $table->float('child_price', 8, 2)->nullable();
            $table->float('discount_rate', 8, 2)->nullable();
            $table->longText('ticket_text')->nullable();
            $table->boolean('mon')->nullable()->default(false);
            $table->boolean('tue')->nullable()->default(false);
            $table->boolean('wed')->nullable()->default(false);
            $table->boolean('thu')->nullable()->default(false);
            $table->boolean('fri')->nullable()->default(false);
            $table->boolean('sat')->nullable()->default(false);
            $table->boolean('sun')->nullable()->default(false);
            $table->integer('days_advance_to_reserve');
            $table->unsignedBigInteger('tour_id');
            $table->timestamps();
        });

        Schema::table('operation_tour', function($table) {
            $table->foreign('tour_id')
                    ->references('id')
                    ->on('tours')
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
        Schema::dropIfExists('operation_tour');
    }
}
