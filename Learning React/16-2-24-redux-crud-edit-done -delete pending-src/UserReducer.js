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

   
        // console.log(action.payload)

        const {id,name,email,phone} = action.payload;
              // console.log(id,name,email,phone)

              // console.log(state)
            const userID =   state.find((user)=>{
                // console.log(user)
                return user.id == id
    })

              // console.log(userID.name);manit

              if(userID)
              {
                userID.name = name;
                userID.email = email;
                userID.phone = phone;
              }



      }


  },
});

export const { addUser,editUser } = userSlice.actions;
export default userSlice.reducer;
