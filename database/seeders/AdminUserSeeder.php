<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'takinurm@gmail.com',    //takinurm@gmail.com testpass12345
            'password' => bcrypt('testpass12345'),
            'email_verified_at' => now(),
            // 'approved_at' => now(),
        ]);
    }
}
