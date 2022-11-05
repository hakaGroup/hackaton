<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entry_attribute_value extends Model
{
    use HasFactory;

    protected $fillable = [
        'entry_id',
        'attribute_id',
        'value',
        'critical_value'
    ];

    protected $table = 'entry_attribute_value';
}
