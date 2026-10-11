<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class orders_details extends Model
{
    protected $guarded = [];

    public function order() {
        return $this->belongsToMany(orders::class,"order_id");
    }
}
