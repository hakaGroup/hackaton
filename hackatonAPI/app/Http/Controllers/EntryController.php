<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Entry;
use App\Models\Entry_attribute_value;
use App\Models\Product;
use App\Models\Attribute;
use App\Models\Fridge_entry;

use Auth;
use Collection;

class EntryController extends Controller
{
    public function addEntry (Request $request) {
        $found = False;
        $entry = Entry::where('product_id', $request->product_id)->first();
        if ($entry) {
            $attributes = Products_attribute::where('prod_id', $entry->id())->get();

            if($attributes == $request->attributes)
            {
                $found = True;
            }
        }

        if(!$found)
        {
            $newEntry = new Entry();
            $newEntry->product_id = $request->product_id;
            $newEntry->save();


            foreach ($request->attributes as $attribute) {
                $newEntryAttributes = new Entry_attribute_value();
                $newEntryAttributes->product_id = $newEntry->id;
                $newEntryAttributes->attribute_id = $attribute->id;
                $newEntryAttributes->value = $request->value;
                $newEntryAttributes->save();
            }
        }
    }

    public function getEntry ($id) {
        $entry = Entry::find($id);
        if ($entry)
        {
            $product = Product::where('id', $entry->product_id)->first();
            $entryAttributes = Entry_attribute_value::select('value', 'attribute_id', 'critical_value')->where('entry_id', $entry->id)->get()
            ->toArray();

            $attributes = [];
            foreach ($entryAttributes as $entryAttribute)
            {
                $attribute = Attribute::where('id', $entryAttribute['attribute_id'])->get()->toArray();
                $attribute = array_merge($attribute, $entryAttribute);
                // $toMerge = collect(['value' => $entryAttribute->value]);
                // $attribute = $toMerge->merge($attribute);
                array_push($attributes, $attribute);
                // array_push($attributes, ['value'=>$entryAttribute->value]);
            }
            return response()->json(['entry_id' => $entry->id,
                                     'product'=> $product,
                                     'attributes' => $attributes
                                    ],  200);
        }
        else
        {
            return response()->json(['message' => 'Entry not found'], 404);
        }
    }

    public function getAllUserEntries () {
        $userID = Auth::user()->id;

        $userEntryIDs = Fridge_entry::where('user_id', $userID)->get('id');
        $entries = [];

        foreach ($userEntryIDs as $entryID)
        {
            $entry = EntryController::getEntry($userID)->original;
            array_push($entries, $entry);
        }
        return $entries;
        // return Product::all();
    }
}
