<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesToursPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_tours_pivot', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('categories_tours_id');
            $table->unsignedBigInteger('tour_id');
            $table->timestamps();
        });

        Schema::table('categories_tours_pivot', function($table) {
            $table->foreign('categories_tours_id')
                    ->references('id')
                    ->on('categories_tours')
                    ->onDelete('cascade');
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
        Schema::dropIfExists('categories_tours_pivot');
    }
}
