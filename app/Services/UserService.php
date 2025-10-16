<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserService
{
    public function getUsers(): Collection
    {
        return User::all();
    }

    public function createUser(array $data): User
    {
        $newUser = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
        ];

        return User::create($newUser);
    }

    public function updateUser(User $user, array $data): User
    {
        $updatedUser = [
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
        ];

        $user->update($updatedUser);

        return $user;
    }
}
