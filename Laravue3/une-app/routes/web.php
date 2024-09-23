<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

Route::get('/', function () {
    return Inertia::render('App');
})->name('home');

// TODO:ログインダミーなので削除予定
Route::get('/login-as-user', function () {
    $id = 1;
    $user = User::find($id);
    if ($user) {
        Auth::login($user);
        return Inertia::render('Pages/SecretAdmin', [
            'user' => $user
        ]);
    }
});
Route::get('/logout', function () {
    Auth::logout();
    return to_route('home');
});

// Route::group(['middleware' => ['permission:admin']], function () {
//     // 例えば、
//     // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
// });
