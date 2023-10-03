<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    //post create book
    public function create(Request $request) {
        // Access each field's data from the FormData object
        $validator = $this->validation($request);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'data'=>null,'message' => $validator->errors()], 422);
        }
        $data = $this->getData($request);

        // Access the uploaded image file
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imgName = uniqid().'_Khon_Hein_'.time().'.'.$image->getClientOriginalExtension();
            $data += ['image'=>$imgName];
            $image->storeAs('images',$imgName,'public');
        }
        //Access the upload mp3 file
        if($request->hasFile('sound')){
            $sound = $request->file('sound');
            $soundName = uniqid().'_Khon_Hein_'.time().'.'.$sound->getClientOriginalExtension();
            $data += ['sound' => $soundName];
            $sound->storeAs('sounds',$soundName,'public');
        }
        Book::create($data);
        return response()->json(['status'=>true,'data'=>$data,'message'=>'Added new Success'],200);
    }

    public function bookList() {
        //$bookList = Book::where('category_id',$id)->get();
        $bookList = Book::where('archive',false)->get();
        $resp = [
            'status'=>true,
            'message'=>'book list category have',
            'booksList' =>$bookList,
        ];
        return response()->json($resp,200);
    }

    public function delete($id) {
        $book = Book::where('id',$id)->first();
        if($book) $book->archive = true; else return response()->json(['status'=>false,'message'=>'No book with id '.$id]);
        $book->save();
        return response()->json(['status'=>true,'message'=>'deleted and archived success']);

    }

    public function edit(Request $request, $id) {
        // Validate the incoming data
        $validator = $this->validation($request);
        if($validator->fails()) return response()->json(['status'=>false,'errors'=>$validator->errors()->first()]);
        $data = $this->getData($request);
        // Find the resource by ID
        $book= Book::where('id',$id)->first();
        // Access the uploaded image file
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imgName = uniqid().'_Khon_Hein_'.time().'.'.$image->getClientOriginalExtension();
            $data += ['image'=>$imgName];
            $image->storeAs('images',$imgName,'public');
            if (!empty($book->image)) {
                Storage::delete('public/images/' . $book->image);
            }
        }
        //Access the upload mp3 file
        if($request->hasFile('sound')){
            $sound = $request->file('sound');
            $soundName = uniqid().'_Khon_Hein_'.time().'.'.$sound->getClientOriginalExtension();
            $data += ['sound' => $soundName];
            $sound->storeAs('sounds',$soundName,'public');

            if (!empty($book->sound)) {
                Storage::delete('public/sounds/' . $book->sound);
            }
        }
        // Update the resource's attributes
        $book->update($data);

        return response()->json(['status'=>true,'message' => 'Resource updated successfully']);

    }
    private function getData(Request $request) {
        return [
            'category_id'=>$request->categoryId,
            'name' => $request->name,
            'author' => $request->author,
            'outline' => $request->author,
            'description' => $request->description,
        ];
    }

    public function bookDetails($id) {
        $book = Book::where('id',$id)->first();
        return response()->json(['status'=>true,'data'=>$book],200);
    }
    private function validation(Request $request) {
        $rules=[
            'categoryId'=>'required',
            'name' =>'required|string|max:255',
            'author' =>'required',
            'outline'=>'required',
            'description' => 'required',
        ];
        $messages=[
            'categoryId.required'=>'category id is required',
            'name.required'=>'name is required',
            'author.required'=>'author name is required',
            'outline.required'=>'outline is required',
            'description.required'=>'description  is required',
            'name.max'=>'Name is too long',
        ];
        return  Validator::make($request->all(), $rules, $messages);

    }
}
