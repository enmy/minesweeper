<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $fillable = [
        'board', 'browser_id', 'dimensions', 'seconds'
    ];
}
