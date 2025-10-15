<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/index', function () {
    return Inertia::render('Index');
})->name('index');

Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout.post');

//
//Route::get('/login', function () {
//    return Inertia::render('LoginPage');
//})->name('login');

Route::get('/test', function () {
   return Inertia::render('Test');
})->name('test');
