<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeoToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seo_tours', function (Blueprint $table) {
            $table->id();
            $table->text('keywords')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->boolean('see_home')->nullable()->default(false);
            $table->unsignedBigInteger('tour_id');
            $table->timestamps();
        });

        Schema::table('seo_tours', function($table) {
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
        Schema::dropIfExists('seo_tours');
    }
}
