import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BookType } from "../../type/type";
import { baseToken, baseUrl } from "../../pages/admin/config/config";


const initialState  = {
   bookList:[],
   isLoading:false,
   status:false,
   error:null,
}

//thunk action
export const createBook = createAsyncThunk(
    'create/book',
    async(payload:BookType,thunkApi)=> {
        const response = await fetch(`${baseUrl}/api/book`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
                'Accept':'application/json',
              },
            body:JSON.stringify(payload),
        });
        if(response.ok){
        thunkApi.dispatch(setStatus(true))
        }else console.log(" NO NO NO NO ")
    }
)

export const addBookSlice = createSlice({
    name:'book',
    initialState,
    reducers: {
        setStatus : (state,action) => {
            state.status = action.payload;
        }
    }
})

export const {setStatus} = addBookSlice.actions;
export default addBookSlice.reducer;
