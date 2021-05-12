<?php

use Illuminate\Database\Seeder;
use App\General_Information;

class GeneralInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(General_Information::class, 25)->create();
    }
}
