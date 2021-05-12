<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Categories_Tours_Pivot;
use Faker\Generator as Faker;

$factory->define(Categories_Tours_Pivot::class, function (Faker $faker) {
    return [
        'categories_tours_id' => $faker->unique(true)->numberBetween($min = 1, $max = 25),
        'tour_id' => $faker->unique(true)->numberBetween($min = 1, $max = 25)
    ];
});
