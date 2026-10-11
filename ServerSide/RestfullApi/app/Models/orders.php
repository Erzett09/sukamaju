<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
    protected $guarded = [];

    public function order_details() {
        return $this->hasMany(orders_details::class,"order_id");
    }

    public function shop() {
        return $this->belongsToMany(Shops::class,"shop_id");
    }
}
