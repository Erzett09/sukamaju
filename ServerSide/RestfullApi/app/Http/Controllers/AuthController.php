<?php

namespace App\Http\Controllers;

use App\Models\User;
use Error;
use ErrorException;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function Login(Request $request) {
        $validator = Validator::make($request->all(),
        [
            'email' => 'required|string|email',
            'password' => 'required|string'
        ],
        [
            'email.required' => 'email wajib di isi!',
            'email.email' => 'alamat email keliru',

            'password' => 'kata sandi wajib di isi!'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'validator errors',
                'errors' => $validator->errors()
            ],422);
        }

        $user = User::where('email',$request->email)->first();

        if(!$user || !Hash::check($request->password,$user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'kata sandi atau email salah',
            ],401);
        }

        $token = $user->createToken('kasir-maju-token')->plainTextToken;

        return response()->json([
            'status' => 'successfully',
            'message' => 'login berhasil',
            'data' => [
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role
            ],
            'token' => $token
        ],200);
    }


    public function Register(Request $request) {

        $validated = Validator::make($request->all(),[
            'name' => "required|string|max:255",
            'email' => 'required|string|unique:users,email|max:255|email',
            'password' => 'required|min:4|max:20'
        ],
        [
            'name.required' => "nama pengguna wajib di isi!",
            'name.max' => 'nama pengguna maksimal 255 karakter!',

            'email.required' => 'email wajib di isi!',
            'email.unique' => "alamat email sudah digunakan",
            'email.max' => 'email maksimal 255 karakter',
            'email.email' => 'alamat email keliru',

            'password.required' => 'kata sandi wajib di isi!',
            'password.min' => 'kata sandi minimal 4 karakter',
            'password.max' => 'kata sandi maksimal 20 karakter'
        ]);

        if($validated->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validator error',
                'errors' => $validated->errors()
            ],422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'owner'
        ]);

        $token = $user->createToken('kasir-maju-token')->plainTextToken;

        return response()->json([
            'status' => 'successfully',
            'message' => 'Registration success',
            'data' => [
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role
            ],
            'token' => $token
        ],201);
    }

    public function Logout(Request $request) {

        try {
            $request->user('api')->currentAccessToken()->delete();

            return response()->json([
                'status' => "successfully",
                'message' => "Logout success"
            ],200);
        } catch (Error) {
            return response()->json([
                'status' => "error",
                'message' => 'Failed to logout',
            ],401);
        }
    }
}
