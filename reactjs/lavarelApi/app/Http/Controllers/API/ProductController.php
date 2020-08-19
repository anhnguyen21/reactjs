<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use App\product;
use App\cart;
use App\User;
use \Firebase\JWT\JWT;
// https://github.com/GeneaLabs/laravel-maps
//https://github.com/pnlinh/laravel-google-distance
//https://stackoverflow.com/questions/29003118/get-driving-distance-between-two-points-using-google-maps-api

class ProductController extends Controller
{
    public function index(){
        $products = DB::table('product')->get();
        return $products;
    }
    public function getUser($id){
        return User::find($id)->email;
    }
    public function deleteProduct($id){
        DB::delete('delete from product where id ='.$id);
        return DB::table('product')->get();
    }
    public function indexCart($id){
        $cart = DB::table('carts')
        ->select('product.*','carts.id','carts.quantity')
        ->join('product', 'carts.id_pro', '=', 'product.id')
        ->where('carts.id_user',$id)
        ->get();
        return $cart;
    }
    public function addProducts(Request $request){
      $pro=new product();
      $pro->name=$request->get('name');
      $pro->price=$request->get('price');
      $pro->img=$request->get('img');
      $pro->save();
    }
    public function addtoCart(Request $request){
      $cart=new cart();
     
      $pro=DB::select('select id,quantity from carts where id_pro ='.$request->get('id_pro').' and id_user='.$request->get('id_user'));
      if($pro==null){
        $cart->id_pro=$request->get('id_pro');
        $cart->id_user=$request->get('id_user');
        $cart->quantity=1;
        $cart->save();
      }else{
        cart::where("id", $pro[0]->id)->update([
            "quantity" =>$pro[0]->quantity+1
        ]);
      }
     
    }
    public function deleteCart($id){
        DB::delete('delete from carts where id='.$id);
        // return DB::table('carts')->get();
    }
    public function updateProducts(Request $request){
        product::where("id", $request->id)->update([
            "name" => $request->name,
            "price" => $request->price,
            "img" => $request->img,
        ]);
    }
    function login(Request $request){
		$email = $request->input('email');
		$password = $request->input('password');   
	    $key ="anh";
		if(Auth::attempt(["password"=>$password,"email"=>$email])){
		    $user_id= Auth::user()->id;
            $data=JWT::encode($user_id, $key);
            Cookie::queue('idToken', $data, 10*24);
        //  echo "Encode:\n" . print_r($data, true) . "\n";
	 	    $array = array("idToken" => $data);
			return response()->json($array,200);
		}else{
			$array = array("data" => null);
			return response()->json($array,400);
		}   
    }
    public function rigest(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        $key ="anh";
        if(Auth::attempt(["password"=>$password,"email"=>$email])){
            $user_id= Auth::user()->id;
            $data=JWT::encode($user_id, $key);
	 	    $array = array("idToken" => $data);
			return response()->json($array,400);
        }else{
            $user=new User();
            $user->email=$email;
            $user->password=Hash::make($password);
            $user->save();
            $user_id=$user->id;
            $data=JWT::encode($user_id, $key);
            return response()->json($data,200);
        }
    }
}
