<?php

use Illuminate\Database\Seeder;
use App\Seo_Tour;
class SeoToursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Seo_Tour::class, 50)->create();
    }
}
