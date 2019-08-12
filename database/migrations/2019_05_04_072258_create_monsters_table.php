<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMonstersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monsters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('monster_name');
            $table->integer('hp');
            $table->integer('mp');
            $table->integer('atk');
            $table->integer('matk');
            $table->integer('def');
            $table->integer('mdef');
            $table->integer('spd');
            $table->integer('hit');
            $table->integer('flee');
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
        Schema::dropIfExists('monsters');
    }
}
