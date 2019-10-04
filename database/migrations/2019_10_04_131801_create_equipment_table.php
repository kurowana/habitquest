<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('type');
            $table->bigInteger('hp')->default(0);
            $table->bigInteger('mp')->default(0);
            $table->bigInteger('atk')->default(0);
            $table->bigInteger('matk')->default(0);
            $table->bigInteger('def')->default(0);
            $table->bigInteger('mdef')->default(0);
            $table->bigInteger('spd')->default(0);
            $table->bigInteger('hit')->default(0);
            $table->bigInteger('flee')->default(0);
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

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
        Schema::dropIfExists('equipment');
    }
}
