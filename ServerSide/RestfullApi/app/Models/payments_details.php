<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class payments_details extends Model
{
    protected $guarded = [];

    public function payment() {
        return $this->belongsToMany(payments::class,"payment_id");
    }
}
