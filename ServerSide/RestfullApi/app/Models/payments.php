<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class payments extends Model
{
    public function payment_details() {
        return $this->hasMany(payments_details::class,"payment_id");
    }

    public function shop() {
        return $this->belongsToMany(Shops::class,"shop_id");
    }
}

