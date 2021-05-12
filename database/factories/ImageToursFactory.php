<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image_Tours;
use Faker\Generator as Faker;

$factory->define(Image_Tours::class, function (Faker $faker) {
    return [
        'url_image' => $faker->imageUrl($width = 640, $height = 480),
        'tour_id' => $faker->unique(true)->numberBetween($min = 1, $max = 25)
    ];
});
