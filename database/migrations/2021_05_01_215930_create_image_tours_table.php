<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImageToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_tours', function (Blueprint $table) {
            $table->id();
            $table->text('url_image')->nullable();
            $table->unsignedBigInteger('tour_id');
            $table->boolean('status')->nullable()->default(true);
            $table->timestamps();
        });

        Schema::table('image_tours', function($table) {
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
        Schema::dropIfExists('image_tours');
    }
}
