<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    //post method
    public function create(Request $rrequest) {
        $validator = $this->validation($rrequest);

        if($validator->fails()){
            return response()->json([
                'message'=>'Failed to create',
                'errors' =>$validator->errors(),
                'status'=>false],401);
        }
        Category::create(['name'=>$rrequest->name]);

        return response()->json([
            'message'=>'create a new category success',
            'status'=>true
        ],200);
    }

    public function getCategory () {
        $data = Category::where('archive',false)->get();
        return response()->json(['status'=>true,'categories' => $data]);
    }

    public function delete($id) {
        $cate = Category::where('id',$id)->first();
        if($cate){
            $cate->archive = true;
            $cate->save();
            return response()->json(['status'=>true,'message'=>'Deleted Success']);
        }
        return response()->json(['status'=>false,'Failed']);
    }

    public function edit($id,$data) {
        $cate = Category::where('id',$id)->first();
        if($cate){
            $cate->name = $data;
            $cate->save();
            return response()->json(['status'=>true,'message'=>'Update Edited Success']);
        }
        return response()->json(['status'=>false,'Failed to Update']);
    }
    private function validation(Request $request) {
        $rules = [
        'name' => 'required|max:255|string|unique:categories',
    ];

    $messages = [
        'name.required' => 'Category Name is Required',
        'name.unique' => 'Already have , need to unique',
        'name.max' => 'your category is too logn text',

    ];

    return Validator::make($request->all(), $rules, $messages);
}
}

