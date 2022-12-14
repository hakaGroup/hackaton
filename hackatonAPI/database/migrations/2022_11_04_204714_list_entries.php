<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ListEntries extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_entries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('entry_id');
            $table->timestamps();
        });

        Schema::table('list_entries', function (Blueprint $table){
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
        });

        Schema::table('list_entries', function (Blueprint $table){
            $table->foreign('entry_id')
                ->references('id')
                ->on('entries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('list_entries');
    }
}
