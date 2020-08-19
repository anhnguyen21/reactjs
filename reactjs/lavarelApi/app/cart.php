<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cart extends Model
{
    public $timestamps=false;
    protected $table="carts";
    public function cart_product(){
        return $this->hasMany('App\product','id_pro','id');
    }
}
