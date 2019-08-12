<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('lv')->default(1);
            $table->integer('exp')->default(0);
            $table->integer('str')->default(10);
            $table->integer('agi')->default(10);
            $table->integer('vit')->default(10);
            $table->integer('int')->default(10);
            $table->integer('dex')->default(10);
            $table->integer('luc')->default(10);
            $table->integer('stage')->default(1);
            $table->integer('point')->default(0);
            $table->string('char_img')->default('char1');
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
        Schema::dropIfExists('statuses');
    }
}
