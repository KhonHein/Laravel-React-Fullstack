<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AdminController extends Controller
{
    public function registration(Request $request){
        $validator = $this->validation($request);
        if($validator->fails()){
                $resp = [
                    'message' => 'Register Failed',
                    'errors' => $validator->errors(),
                    'token' =>null,
                    'user' => null,
                    'status' => false
                ];
            return response()->json($resp , 422);
        }

         User::create($this->getData($request));
        $resp = $this->responseUser($request);

        return response()->json($resp, 200);
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $resp = $this->responseUser($request);
            return response()->json($resp, 200);
        }
        $resp = ['message' => 'Invalid credentials','status'=>false];
        return response()->json($resp, 401);
    }
    public function user()
    {
        $user = Auth::user();

        return response()->json(['user' => $user]);
    }

    public function getUserList(Request $request){
        if(Auth::user()->role === 'founder'){
            $users = User::get();
            return response()->json(['status'=>true,'data'=>$users],200);
        }
        return response()->json(['status'=>false,'message' => 'You do not have permission ']);
    }

    public function updateuserRole($id,$role){
        if(Auth::user()->role === 'founder'){
            $user = User::where('id',$id)->first();
            $user->role = $role;
            $user->save();
            return response()->json(['status'=>true,'message'=>'success upgraded'],200);
        }else return response()->json(['status'=>false,'message'=>'you are not in founders !'],403);
    }

    public function editArchive($id,$selectedArchive){
        $isTrue = $selectedArchive === "1" || $selectedArchive === 1;
        if(Auth::user()->role === 'founder'){
            $user = User::where('id',$id)->first();
            $user->archive = $isTrue;
            $user->save();
            return response()->json(['status'=>true,'message'=>'success deleted'],200);
        }else return response()->json(['status'=>false,'message'=>'you are not in founders !'],403);
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logged out successfully']);
    }


    public function hello()
    {
        $name = Auth::id();
        return response()->json(['name' => $name], 200);
    }
    // public function logoutApi()
    // {
    //     if (Auth::check()) {
    //         Auth::user()->AauthAcessToken()->delete();
    //     }
    // }
    public function reset()
    {
        PasswordReset::class;
    }

    private function getData(Request $request) {
        return [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            // 'confirm_password'=> $request->confirm_password,
        ];
    }

    private function validation(Request $request) {
            $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'confirm_password' => 'required|string|min:6|same:password',
        ];

        $messages = [
            'name.required' => 'User Name is Required',
            'email.required' => 'User Email is Required',
            'password.required' => 'Password is Required',
            'confirm_password.required' => 'Confirm Password is Required',
        ];

        return Validator::make($request->all(), $rules, $messages);
    }
    private function responseUser(Request $request) {

        $user = User::where('email',$request->email)->first();
        $token = $user->createToken('SundayNoteToken'.time())->plainTextToken;

        return [
            'message' => 'User registered successfully',
            'error' => null,
            'access_token' =>$token,
            'user' => $user,
            'status' => true
        ];
    }
}
