<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('last_name', 150);
            $table->text('image')->nullable();
            $table->date('birth_date');
            $table->integer('sex')->comment('1: masculino, 2: femenino, 3: otro');
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('city_id');
            $table->timestamps();
        });

        Schema::table('profiles', function($table) {
            $table->foreign('country_id')
                    ->references('id')
                    ->on('countrys')
                    ->onDelete('cascade');
            $table->foreign('city_id')
                    ->references('id')
                    ->on('citys')
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
        Schema::dropIfExists('profiles');
    }
}
