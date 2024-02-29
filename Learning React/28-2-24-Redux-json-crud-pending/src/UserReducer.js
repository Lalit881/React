import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name:"employees",
    initialState:[],
    reducers:{
        userData:(state,action)=>{
          state.push(action.payload)
    //    console.log(action.payload);
        },

        addUsers: (state,action)=>{
            state.push(action.payload)
        },

        editUsers: (state,action)=>{
            const {id,name,salary} = action.payload;
            // console.log(name)
            // console.log(salary)
            // console.log(id);
            state.push(action.payload)
           const empIdObj = state.find((f)=>{
              return  f.id == id
            })

            // console.log(empIdObj.name)
            // console.log(name)
            // console.log(salary)
           if(empIdObj)
           {

            // console.log(name)
            // console.log(salary)
            // console.log(empIdObj)
            empIdObj.name =name;
            empIdObj.salary =salary
           }


        },

        deleteUsers: (state,action)=>{
            const {id} = action.payload;
            // console.log(name)
            // console.log(salary)
            // console.log(id);
            state.push(action.payload)
           const empIdObj = state.find((f)=>{
              return  f.id == id
            })

            // console.log(empIdObj)

            if(empIdObj)
            {
                state.filter((f)=>{
                    return f.id !== id
                    console.log(f)
                })
                
            }

           


        }
    }
})

export const {userData,addUsers,editUsers,deleteUsers} =  userSlice.actions; 
export default userSlice.reducer;