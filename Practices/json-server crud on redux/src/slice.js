import { createSlice } from "@reduxjs/toolkit";


const initialState = []
export const slice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userDetails:(state,action)=>{
            return [...state,...action.payload]
        },
        addDetails:(state,action)=>{
            fetch("http://localhost:4000/employees",{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(action.payload)
            })
            .then((res)=>{
                if(res){
                    alert("Data Inserted")
                    return res.json()
                }
            })
        },
        deleteDetails:(state,action)=>{
            fetch("http://localhost:4000/employees/"+action.payload,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
            .then((res)=>{
                if(res){
                    alert("Data Deleted")
                    return res.json()
                }
            })
        }
    }
})

export const {userDetails,addDetails,deleteDetails} = slice.actions;
export default slice.reducer;