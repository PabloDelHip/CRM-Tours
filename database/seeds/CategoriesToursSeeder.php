<?php

use Illuminate\Database\Seeder;
use App\Categorie_Tour;

class CategoriesToursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Categorie_Tour::class, 25)->create();
    }
}
