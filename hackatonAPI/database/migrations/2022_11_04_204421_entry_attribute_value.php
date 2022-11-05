<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EntryAttributeValue extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entry_attribute_value', function (Blueprint $table) {
            $table->unsignedBigInteger('entry_id');
            $table->unsignedBigInteger('attribute_id');
            $table->string('value');
            $table->decimal('critical_value')->nullable();
            $table->timestamps();
        });

        Schema::table('entry_attribute_value', function (Blueprint $table){
            $table->foreign('entry_id')
                ->references('id')
                ->on('entries');
        });

        Schema::table('entry_attribute_value', function (Blueprint $table){
            $table->foreign('attribute_id')
                ->references('id')
                ->on('attributes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entry_attribute_value');
    }
}
