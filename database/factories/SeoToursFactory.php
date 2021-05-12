<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Seo_Tour;
use Faker\Generator as Faker;

$factory->define(Seo_Tour::class, function (Faker $faker) {
    return [
        //'keywords' => $faker->shuffle(array("uno", "dos", "tres")),
        'meta_description' => $faker->text($maxNbChars = 200),
        'title' => $faker->text($maxNbChars = 100),
        'description' => $faker->text($maxNbChars = 200),
        'see_home' => $faker->boolean,
        'tour_id' => $faker->unique(true)->numberBetween($min = 1, $max = 25)
    ];
});
