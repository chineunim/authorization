<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/login', function () {
    return Inertia::render('LoginPage');
})->name('login');

Route::post('/login', [AuthController::class, 'login'])->name('login.post');
