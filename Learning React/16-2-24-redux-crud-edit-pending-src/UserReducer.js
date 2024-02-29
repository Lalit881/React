import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

export const userSlice = createSlice({
  name: "user123",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      // console.log(action.payload)
      // console.log(state)

      state.push(action.payload);
    },

    editUser: (state, action) => {
        
        const {id,name,email,phone} = action.payload

        // console.log(name,email,phone)

        // console.log(state)
  
         state.push(action.payload);

        const userId =  state.find((user)=>
           user.id == id
         )

        //  console.log(userId)

         if(userId)
         {
           userId.name =name
        //    userId[0].email =email
        //    userId[0].phone =phone

        //    console.log( userId[0].name)
        //    console.log( userId[0].email)
        //    console.log( userId[0].phone)
          
         }

        

      },


  },
});

export const { addUser,editUser } = userSlice.actions;
export default userSlice.reducer;
