<?php

use Illuminate\Http\Request;

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
Route::group(['namespace' => 'API'], function () {

Route::group(['prefix' => 'user'], function () {
    Route::post('sign-in', 'AuthController@authenticate');
    Route::post('sign-up', 'AuthController@register');
    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::post('logout', 'AuthController@logout');
    });
    Route::get('auth/refreshToken', 'AuthController@refreshedToken');
});

Route::middleware('auth:api', function () {

});

});
