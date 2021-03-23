<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->longText('note');
            $table->boolean('status')->default('1');
            $table->unsignedBigInteger('user_profile_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
        });

        Schema::table('notes', function($table) {
            $table->foreign('user_profile_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
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
        Schema::dropIfExists('notes');
    }
}
