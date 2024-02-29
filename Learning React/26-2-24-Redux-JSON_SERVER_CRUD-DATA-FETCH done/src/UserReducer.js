import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name:"employees",
    initialState:[],
    reducers:{
        userData:(state,action)=>{
          state.push(action.payload)
       console.log(action.payload);
        }
    }
})

export const {userData} =  userSlice.actions; 
export default userSlice.reducer;