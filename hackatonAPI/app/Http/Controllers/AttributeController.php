<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Attribute;

class AttributeController extends Controller
{
    public function indexAttribute() {
        $attributes = Attribute::all();
        return response()->json(['attributes' => $attributes], 200);
    }
}
