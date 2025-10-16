<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function __construct(
        protected readonly UserService $userService
    )
    {
    }

    public function index(): JsonResponse
    {
        $users = $this->userService->getUsers();
        return response()->json($users);
    }

    public function create(CreateUserRequest $request): JsonResponse
    {
        $data = $request->validated();

        $user = $this->userService->createUser($data);

        return response()->json($user);
    }

    public function update(User $user, UpdateUserRequest $request): JsonResponse
    {
        $data = $request->validated();

        $updatedUser = $this->userService->updateUser($user, $data);

        return response()->json($updatedUser);
    }

    public function destroy(User $user): JsonResponse
    {
        $user->delete();
        return response()->json('deleted');
    }
}
