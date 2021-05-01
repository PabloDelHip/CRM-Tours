<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general_information', function (Blueprint $table) {
            $table->id();
            $table->longText('description')->nullable();
            $table->longText('recommendation')->nullable();
            $table->longText('includes')->nullable();
            $table->longText('itinerary')->nullable();
            $table->longText('additional_information')->nullable();
            $table->string('duration', 10);
            $table->float('qualification', 8, 2);
            $table->unsignedBigInteger('tour_id');
            $table->timestamps();
        });


        Schema::table('general_information', function($table) {
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
        Schema::dropIfExists('general_information');
    }
}
