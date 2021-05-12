<?php

use Illuminate\Database\Seeder;
use App\Categories_Tours_Pivot;

class CategoriesToursPivotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Categories_Tours_Pivot::class, 25)->create();
    }
}
