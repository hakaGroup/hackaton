<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;

use App\Models\User;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function(Request $request){
        return $request->user();
    });

    Route::get('/islogged', [AuthController::class, 'islogged']);
    Route::post('/user/logout', [AuthController::class, 'logout'])->name('logout');

    Route::post('/product/add', [ProductController::class, 'addProduct']);
    Route::get('/product/get/{id}', [ProductController::class, 'getProduct']);
    Route::get('/product/index', [ProductController::class, 'indexProduct']);
});
