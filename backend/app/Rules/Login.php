<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\ValidatorAwareRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Validator;

class Login implements ValidationRule, ValidatorAwareRule
{

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
       
    }

     /**
     * The validator instance.
     *
     * @var \Illuminate\Validation\Validator
     */
    protected $validator;

    // ...

    /**
     * Set the current validator.
     */
    public function setValidator(Validator $validator): static
    {
        $this->validator = $validator;

        $loginData = $validator->safe()->only(['email', 'password']);

        if (!Auth::attempt($loginData)) {
            $validator->errors()->add('noAuth', "Неверно введены данные");
        }

        return $this;
    }
}
