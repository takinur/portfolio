<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectImageController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Home
Route::get('/', [HomeController::class, 'index']);

//Store Contact Message
Route::post('/contact', [HomeController::class, 'store'])->name('saveContact');


//Sitemap
Route::get('/sitemap.xml', [HomeController::class, 'sitemap']);

//Admin Route dashboard
// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');

Route::post('/image-upload', [ProjectImageController::class, 'store']);

//Admin Route --Remove later
Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
    Route::resource('/dashboard', DashboardController::class, [
        'names' => [
            'index' => 'dashboard',
            // 'store' => 'faq.new',.
        ]
    ]);
    Route::resource('/projects', ProjectsController::class);
});

//Test Route
Route::get('/test', function () {
    return Inertia::render('TestSubjectWraith');
})->name('test');


//Clear Cache facade value:
Route::get('/clear-cache', function () {
    $exitCode = Artisan::call('cache:clear');
    return '<h1>Cache facade value cleared</h1>';
});

//Reoptimized class loader:
Route::get('/optimize', function () {
    $exitCode = Artisan::call('optimize');
    return '<h1>Re-optimized class loader</h1>';
});


//Clear Route cache:
Route::get('/route-clear', function () {
    $exitCode = Artisan::call('route:clear');
    return '<h1>Route cache cleared</h1>';
});

//Clear View cache:
Route::get('/view-clear', function () {
    $exitCode = Artisan::call('view:clear');
    return '<h1>View cache cleared</h1>';
});

//Clear Config cache:
Route::get('/config-cache', function () {
    $exitCode = Artisan::call('config:cache');
    return '<h1>Config cleared</h1>';
});
