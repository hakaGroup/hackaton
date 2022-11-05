<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;
use App\Models\Products_attribute;
use App\Models\Attribute;

class ProductController extends Controller
{
    public function addProduct (Request $request) {
        $found = False;
        $product = Product::where('name', $request->name)->first();
        if ($product) {
            $attributes = Products_attribute::where('prod_id', $product->id)->get();

            if($attributes == $request->attributes)
            {
                $found = True;
            }
        }

        if(!$found)
        {
            $newProduct = new Product();
            $newProduct->name = $request->name;
            $newProduct->save();


            foreach ($request->attributes as $attribute) {
                $newProductAttributes = new Products_attribute();
                $newProductAttributes->prod_id = $newProduct->id;
                $newProductAttributes->attr_id = $attribute->id;
                $newProductAttributes->save();
            }
        }
    }

    public function getProduct ($id) {
        $product = Product::find($id);
        if ($product)
        {
            return response()->json(['product' => $product], 200);
        }
        else
        {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    public function indexProduct () {
        $products = Product::all();

        $result = [];

        foreach ($products as $product)
        {
            $attributes = Products_attribute::where('product_id', $product->id)->get();
            $attrs = [];
            foreach($attributes as $attribute)
            {
                $attr = Attribute::find($attribute->attribute_id);
                array_push($attrs, $attr);
            }
            $result[] = [
                "id" => $product->id,
                "name" => $product->name,
                "attributes" => $attrs
            ];
        }

        return response()->json($result, 200);
    }
}
