<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginPostRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginPostRequest $request)
    {
        $validated = $request->validated();

        return $validated;
    }

    public function signUp()
    {
        return [
            "status" => 'ok',
            "action" => 'signUp',
        ];
    }
}
