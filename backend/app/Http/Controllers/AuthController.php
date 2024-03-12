<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginPostRequest;
use App\Http\Requests\SignUpPostRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $postService)
    {
        $this->authService = $postService;
    }

    public function login(LoginPostRequest $request)
    {
        return $this->authService->login($request);
    }

    public function signUp(SignUpPostRequest $request)
    {
        return $this->authService->signUp($request);
    }

    public function logout(Request $request)
    {
        return $this->authService->logout($request);
    }
}
