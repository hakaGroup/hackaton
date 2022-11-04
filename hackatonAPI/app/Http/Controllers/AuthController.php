<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    protected $guard;
    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }

    public function islogged()
    {
        return true;
    }

    public function logout(Request $request)
    {
        $this->guard->logout();
        $request->user()->currentAccessToken()->delete();
        response()->json(['success' => 'Logged out'], 200);
    }
}
