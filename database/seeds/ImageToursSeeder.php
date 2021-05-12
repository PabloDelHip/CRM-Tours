<?php

use Illuminate\Database\Seeder;
use App\Image_Tours;

class ImageToursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Image_Tours::class, 200)->create();
    }
}
