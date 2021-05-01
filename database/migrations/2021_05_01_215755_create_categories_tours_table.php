<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories_tours', function (Blueprint $table) {
            $table->id();
            $table->string('name', 250);
            $table->text('description')->nullable();
            $table->text('image')->nullable();
            $table->text('title')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('keywords')->nullable();
            $table->boolean('see_home')->nullable()->default(false);
            $table->boolean('reverse_outside')->nullable()->default(false);
            $table->boolean('status')->nullable()->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories_tours');
    }
}
