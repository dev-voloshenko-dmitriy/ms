<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginPostRequest;
use App\Services\AuthServices\LoginServices;

class AuthController extends Controller
{
    public function login(LoginPostRequest $request)
    {
        return (new LoginServices($request->validated()))->make();
    }

    public function signUp()
    {
        return [
            "status" => 'ok',
            "action" => 'signUp',
        ];
    }
}
