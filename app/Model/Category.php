<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    // Change id to slug
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
