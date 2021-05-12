<?php

use Illuminate\Database\Seeder;
use App\Operation_Tour;
class OperationTourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Operation_Tour::class, 25)->create();
    }
}
