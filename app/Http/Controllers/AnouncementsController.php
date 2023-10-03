<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Anouncements;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AnouncementsController extends Controller
{
    //post create
    public function create(Request $request) {
        $validator = $this->validation($request);
        if($validator->fails()){
            return response()->json(['status'=>false,'errors'=>$validator->errors()]);
        }
        $data = ['caption'=>$request->caption];
        if($request->hasFile('image')){
            $image = $request->file('image');
            $imgName = uniqid().'_Khon_Hein_anounce_slice'.time().'.'.$image->getClientOriginalExtension();
            $data += ['image_url'=>$imgName];
            $image->storeAs('images',$imgName,'public');
        }
        Anouncements::create($data);
        return response()->json(['status'=>true,'data' =>$data]);
    }

    public function getAnouncement() {
        $anouncements = Anouncements::where('archive',false)->get();
        $data = [
            'message' => 'all anouncements list',
            'status' => true,
            'data' => $anouncements
        ];
        return response()->json($data,200);
    }

    public function delete(Request $request){
        $id = $request->id;
        $announce = Anouncements::where('id',$id)->first();
        if($announce) $announce->archive = true;
        $announce->save();
        return response()->json(['status'=>true,'data'=>$announce]);
    }

    public function edit(Request $request) {
        $validator = $this->editValidation($request);
        if($validator->fails()){
            return response()->json(['status'=>false,'errors'=>$validator->errors()]);
        }
         $item = Anouncements::where('id',$request->id)->first();
         $item->caption = $request->caption;

         if($request->hasFile('image')){
            return response()->json(['status'=>true,'data' =>'yes']);
            //  $image = $request->file('image');
            //  $imgName = uniqid().'_Khon_Hein_anounce_slice'.time().'.'.$image->getClientOriginalExtension();
            //  $oldImg = `public/images/`.$item->image_url;
            // if(Storage::exists($oldImg)){
            //     Storage::delete($oldImg);
            // }
            //  $item->image_url = $imgName;
            //  $image->storeAs('images',$imgName,'public');
         }
         $item->save();

        return response()->json(['status'=>true,'data' =>$request->all()]);
    }

    private function editValidation(Request $request) {
        $rule = ['caption' => 'required',];
        return Validator::make($request->all(),$rule);
    }
    private function validation(Request $request) {
        $rules = [
        'caption' => 'required',
        'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg',
    ];

    $messages = [
        'caption.required' => 'Caption is Required',
        'image.required' => 'Image is Required',
        'image.mimes' => 'Your Image is missing type , jpg,png,jpeg,gif,svg',
    ];

    return Validator::make($request->all(), $rules, $messages);
}
}


