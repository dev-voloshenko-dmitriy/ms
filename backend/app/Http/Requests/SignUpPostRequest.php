<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class SignUpPostRequest extends FormRequest
{
    protected $stopOnFirstFailure = true;

    public function messages(): array
    {
        return [
            'name.required' => 'Имя обязателено к заполнению',
            'name.string' => 'Имя должено быть типа string',
            'name.max' => 'Максимальная длина имени не должна превышать 55-ти символов',
            'email.required' => 'Email обязателен к заполнению',
            'email.string' => 'Email должент быть типа string',
            'email.email' => 'Email в формате name@domen.com',
            'email.unique' => 'Пользователь с таким Email уже существует',
            'phone.string' => 'Телефон должент быть типа string',
            'phone.min' => 'Минимальная колличество символов 10 символов',
            'phone.phone' => 'Пользователь с таким телефоном уже существует',
            'password.required' => 'Пороль обязателен к заполнению',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string|max:55",
            "email" => "required|string|email|unique:App\Models\User,email",
            "phone" => "numeric|min:10|unique:App\Models\User,phone",
            "password" => "required|string",
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        $response = response()->json([
            'status' => 'error',
            'details' => $errors->messages(),
        ], 401);

        throw new HttpResponseException($response);
    }
}
