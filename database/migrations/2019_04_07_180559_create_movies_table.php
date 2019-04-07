<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Movies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('preview');
            $table->string('language');
            $table->string('points');
            $table->string('description');
            $table->string('duration');
            $table->string('author');
            $table->string('premiere');
            $table->string('rating');
            $table->string('vote');
            $table->string('popularity');
            $table->string('wallpaper');
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
        Schema::dropIfExists('Movies');
    }
}
