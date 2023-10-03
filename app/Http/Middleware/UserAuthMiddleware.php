<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class UserAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Log::info('Request: ' . $request->url());
        Log::info('Bearer Token: ' . $request->bearerToken());


        if (Auth::check()) {
            // Check the user's role
            if (Auth::user()->role === 'admin' || Auth::user()->role === 'founder') {
                return $next($request);
            }else {
                return response()->json(['message'=>'you are not admin']);
            }

        }
        return response()->json(['message'=>'UnAuthorization']);
    }

}
