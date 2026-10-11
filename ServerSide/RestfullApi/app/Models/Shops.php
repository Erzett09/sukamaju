<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shops extends Model
{
    protected $guarded = [];


    public function users() {
        return $this->belongsToMany(User::class,"user_id");
    }

    public function product() {
        return $this->hasMany(product::class,"shop_id");
    }

    public function payment() {
        return $this->hasMany(payments::class,"shop_id");
    }
}
