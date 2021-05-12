<?php

use Illuminate\Database\Seeder;
use App\Tour;

class ToursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Tour::class, 25)->create();
    }
}
