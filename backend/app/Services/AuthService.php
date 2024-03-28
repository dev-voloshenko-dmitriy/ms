<?php

namespace App\Services;

use App\Http\Requests\LoginPostRequest;
use App\Http\Requests\SignUpPostRequest;
use App\Models\User;
use Illuminate\Http\Request;

/**
 * Class AuthService.
 */
class AuthService
{
    public function signUp(SignUpPostRequest $request)
    {
        $user = User::create($request->validated());

        return [
            "status" => "success",
            'token' => $this->createToken($user),
        ];
    }

    public function login(LoginPostRequest $request): array
    {
        /** @var User $user */
        $user = User::where("email", $request->email)->first();
        
        return [
            "status" => "success",
            'token' => $this->createToken($user)
        ];
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return [
            "status" => "success",
        ];
    }


    private function createToken(User $user): string
    {
        return $user->createToken($user->email)->plainTextToken;
    }
}
