<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'first_name' => 'John',
                'last_name' => 'Doe',
                'email' => 'john.doe@example.com',
                'phone' => '+1 555-1234'
            ],
            [
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'email' => 'jane.smith@example.com',
                'phone' => '+1 555-5678'
            ],
            [
                'first_name' => 'Bob',
                'last_name' => 'Johnson',
                'email' => 'bob.johnson@example.com',
                'phone' => '+1 555-8765'
            ],
            [
                'first_name' => 'Alice',
                'last_name' => 'Williams',
                'email' => 'alice.williams@example.com',
                'phone' => '+1 555-4321'
            ],
        ];

        foreach ($users as $user) {
            User::create([
                ...$user,
                'password' => 'password'
            ]);
        }
    }
}
