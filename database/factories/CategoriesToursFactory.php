<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Categorie_Tour;
use Faker\Generator as Faker;

$factory->define(Categorie_Tour::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'description' => $faker->text($maxNbChars = 200),
        'image' => $faker->imageUrl($width = 640, $height = 480),
        'title' => $faker->text($maxNbChars = 100),
        'meta_description' => $faker->text($maxNbChars = 100),
        'meta_description' => $faker->text($maxNbChars = 100),
        'see_home' => $faker->boolean,
        'reverse_outside' => $faker->boolean,
    ];
});
