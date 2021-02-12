<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersPermitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_permits', function (Blueprint $table) {
            $table->integer('id_user');
            $table->integer('id_module');
            $table->tinyInteger('watch');
            $table->tinyInteger('add');
            $table->tinyInteger('edit');
            $table->tinyInteger('delete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_permits');
    }
}
