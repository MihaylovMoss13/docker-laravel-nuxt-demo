<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Office;
use App\Models\Reservation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        $this->call([
            CategorySeeder::class,
            CourseSeeder::class,
            TrainingScheduleSeeder::class
        ]);
    }
}
