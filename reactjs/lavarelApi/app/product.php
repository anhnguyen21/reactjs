<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    public $timestamps = false;
    protected $table='product';
    protected $fillable = ['name', 'price'];
    public function product_cart(){
        return $this->belongTo('App\cart','id_pro','id');
    }
}
