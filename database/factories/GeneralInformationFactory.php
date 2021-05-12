<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\General_Information;
use Faker\Generator as Faker;

$factory->define(General_Information::class, function (Faker $faker) {
    return [
        'description' => $faker->text($maxNbChars = 200),
        'recommendation' => $faker->text($maxNbChars = 100),
        'includes' => $faker->text($maxNbChars = 200),
        'itinerary' => $faker->text($maxNbChars = 200),
        'additional_information' => $faker->text($maxNbChars = 200),
        'duration' => $faker->unique(true)->numberBetween($min = 1, $max = 50),
        'qualification' => $faker->unique(true)->numberBetween($min = 1, $max = 5),
        'tour_id' => $faker->unique(true)->numberBetween($min = 1, $max = 25)
    ];
});
