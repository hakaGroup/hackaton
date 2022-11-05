<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductsAttributes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_attributes', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('attribute_id');
            $table->decimal('critical_value')->nullable();
            $table->timestamps();
        });

        Schema::table('products_attributes', function (Blueprint $table){
            $table->foreign('product_id')
                ->references('id')
                ->on('products');
        });

        Schema::table('products_attributes', function (Blueprint $table){
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
        Schema::dropIfExists('products_attributes');
    }
}
