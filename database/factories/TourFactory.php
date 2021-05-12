<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Tour;
use Faker\Generator as Faker;

$factory->define(Tour::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'assisted_purchase' => $faker->boolean,
        'url' => $faker->url,
        'status' => $faker->boolean,
        'vendor_id' => $faker->numberBetween($min = 1, $max = 27),
    ];
});
