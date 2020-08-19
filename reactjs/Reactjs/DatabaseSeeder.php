<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Faker;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            insertCus::class,
        ]);
    }

}
class deleteCustomer extends Seeder{
    public function run(){
    DB::table('customer')->delete();
    }
}
class insertPro extends Seeder{
    public function run(){
        DB::table('type_products')->insert(
            [
                'id'=> 1,
                'name'=> 'food restaurent',
                'description'=> '123',
                'image' => "public/img_food/food_content/1.jfif"
            ]);
        DB::table('type_products')->insert(
            [
                'id'=> 2,
                'name'=> 'food restaurent',
                'description'=> '123',
                'image' => "public/img_food/food_content/2.jfif"
            ]);
        DB::table('type_products')->insert(
            [
                'id'=> 3,
                'name'=> 'food restaurent',
                'description'=> '123',
                'image' => "public/img_food/food_content/3.jfif"
            ]);
        DB::table('type_products')->insert(
            [
                'id'=> 4,
                'name'=> 'food restaurent',
                'description'=> '123',
                'image' => "public/img_food/food_content/4.jfif"
            ]);
    }
}
class insertCus extends Seeder{
    public function run(){
        DB::table('customer')->insert(
            [
                'id'=> 1,
                'name'=> 'NguyenTheAnh',
                'gender'=>'1',
                'email'=> '123',
                'adress'=> '123',
                'phone'=> '123',
                'note'=> '123',
                'password' => Hash::make('123'),
            ]);
        DB::table('customer')->insert(
            [
                'id'=> 2,
                'name'=> 'TranCongDung',
                'gender'=>'1',
                'email'=> '123',
                'adress'=> '123',
                'phone'=> '123',
                'note'=> '123',
                'password' => Hash::make('123'),
            ]);
    }
}

class insertFakerTour extends Seeder{
    public function run()
        {
            //

            $faker= Faker\Factory::create();


            for($i=1;$i<10;$i++) {
                DB::table('products')->insert([
                    'product_id' => rand(5,20),
                    'product_name'=>$faker->name,
                    'product_price'=>rand(1000000,2000000),
                    'product_img' => $faker->image,
                    
                ]);
            }

        }
    }