<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AnouncementsController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register',[AdminController::class,'registration']);
Route::post('/login',[AdminController::class,'login']);

//  Route::post('/category',[CategoryController::class,'create']);
//  Route::get('/category',[CategoryController::class,'getCategory']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'],)->group( function () {

    Route::get('/category',[CategoryController::class,'getCategory']);
    Route::get('/anouncemnet',[AnouncementsController::class,'getAnouncement']);
    Route::get('/book/list/',[BookController::class,'bookList']);
    Route::get('/book/details/{id}',[BookController::class,'bookDetails']);

    Route::middleware(['userAuth'])->group(function(){
        Route::post('/category',[CategoryController::class,'create']);
        Route::delete('/category/{id}',[CategoryController::class,'delete']);
        Route::put('/category/{id}/{data}',[CategoryController::class,'edit']);


        Route::post('/book',[BookController::class,'create']);
        Route::delete('/book/{id}',[BookController::class,'delete']);
        Route::post('/book/{id}',[BookController::class,'edit']);

        Route::post('/anouncemnet',[AnouncementsController::class,'create']);
        Route::delete('/anouncemnet',[AnouncementsController::class,'delete']);
        Route::put('/anouncement',[AnouncementsController::class,'edit']);



        Route::middleware(['userAdminAuth'])->group(function(){
            Route::get('/usersLists',[AdminController::class,'getUserList']);
            Route::put('/usersLists/{id}/{selectedArchive}',[AdminController::class,'editArchive']);
            Route::put('/roleUpdate/{id}/{role}',[AdminController::class,'updateuserRole']);

        });

    });
});


