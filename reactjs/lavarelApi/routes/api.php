<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('products','API\ProductController@index');
Route::post('products','API\ProductController@addProducts');
Route::DELETE('products/delete/{id}','API\ProductController@deleteProduct');
Route::get('carts/{id}','API\ProductController@indexCart');
Route::post('carts','API\ProductController@addtoCart');
Route::DELETE('carts/delete/{id}','API\ProductController@deleteCart');
Route::patch('products','API\ProductController@updateProducts');
Route::post('login','API\ProductController@login');
Route::post('rigest','API\ProductController@rigest');
Route::get('user/{id}','API\ProductController@getUser');