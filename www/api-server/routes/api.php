<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{LoginController,
    LogoutController,
    RegisterController,
    TagController,
    OfficeController,
    OfficeImageController,
    UserController,
    UserReservationController,
    HostReservationController};

use App\Http\Controllers\Api\{
    CategoryController,
    CourseController,
    LeadController,
    TrainingScheduleController
};

use App\Http\Resources\{
    CourseResource,
    LeadResource,
    OfficeResource,
    TrainingResource
};

// Auth ...
Route::post('/login', LoginController::class);
Route::post('/register', RegisterController::class);
Route::post('/logout', LogoutController::class);

// Tags...
Route::get('/tags', TagController::class);

// User ...
Route::get('/user', UserController::class)->middleware(['auth:sanctum']);

// Offices...
Route::get('/offices', [OfficeController::class, 'index']);
Route::get('/offices/{office}', [OfficeController::class, 'show']);
Route::post('/offices', [OfficeController::class, 'create'])->middleware(['auth:sanctum', 'verified']);
Route::put('/offices/{office}', [OfficeController::class, 'update'])->middleware(['auth:sanctum', 'verified']);
Route::delete('/offices/{office}', [OfficeController::class, 'delete'])->middleware(['auth:sanctum', 'verified']);

// Office Photos...
Route::post('/offices/{office}/images', [OfficeImageController::class, 'store'])->middleware(['auth:sanctum', 'verified']);
Route::delete('/offices/{office}/images/{image:id}', [OfficeImageController::class, 'delete'])->middleware(['auth:sanctum', 'verified']);

// User Reservations...
Route::get('/reservations', [UserReservationController::class, 'index'])->middleware(['auth:sanctum', 'verified']);
Route::post('/reservations', [UserReservationController::class, 'create'])->middleware(['auth:sanctum', 'verified']);
Route::delete('/reservations/{reservation}', [UserReservationController::class, 'cancel'])->middleware(['auth:sanctum', 'verified']);

// Host Reservations...
Route::get('/host/reservations', [HostReservationController::class, 'index']);

// Auth sanctum
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('api')->group(function () {
    Route::get('courses', [CourseController::class, 'index']);
});

Route::apiResources([
    // 'home'               => HomeController::class,
    'courses'            => CourseController::class,
    'leads'              => LeadController::class,
    'training_schedules' => TrainingScheduleController::class
]);