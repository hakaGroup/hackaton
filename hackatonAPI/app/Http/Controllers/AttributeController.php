<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Attribute;
use App\Models\Type;

class AttributeController extends Controller
{
    public function indexAttribute() {
        $result = [];
        $attributes = Attribute::all();
        foreach($attributes as $attr)
        {
            $type = Type::find($attr->type_id);

            $result[] = [
                'id' => $attr->id,
                'name' => $attr->name,
                'type' => $type,
                'is_required' => $attr->is_required
            ];
        }
        return response()->json(['attributes' => $result], 200);
    }
}
