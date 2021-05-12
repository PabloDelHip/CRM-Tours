<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Operation_Tour;
use Faker\Generator as Faker;

$factory->define(Operation_Tour::class, function (Faker $faker) {
    return [
        'adult_price' => $faker->numberBetween($min = 50, $max = 250),
        'child_price' => $faker->numberBetween($min = 50, $max = 250),
        'discount_rate' => $faker->numberBetween($min = 10, $max = 80),
        'ticket_text' =>  $faker->text($maxNbChars = 200),
        'mon' => $faker->boolean,
        'tue' => $faker->boolean,
        'wed' => $faker->boolean,
        'thu' => $faker->boolean,
        'fri' => $faker->boolean,
        'sat' => $faker->boolean,
        'sun' => $faker->boolean,
        'days_advance_to_reserve' => $faker->numberBetween($min = 1, $max = 5),
        'tour_id' => $faker->unique(true)->numberBetween($min = 1, $max = 25)
    ];
});
