<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    protected $guarded = [];

    public function shop() {
        return $this->belongsToMany(Shops::class,"shop_id");
    }
}
