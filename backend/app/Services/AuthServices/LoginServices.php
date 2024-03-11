<?php

namespace App\Services\AuthServices;

use App\Models\User;
use App\Services\Services;

class LoginServices implements  Services
{
    public function __construct(public array $dataServices){}

    public function make()
    {
        /** @var User $user */
        $user = User::where('email', $this->dataServices['email'])->first();

        return $user->createToken($user->name)->plainTextToken;
    }
}
