<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entry_attribute_value extends Model
{
    use HasFactory;

    protected $fillable = [
        'ent_id',
        'attr_id',
        'value'
    ];
}
