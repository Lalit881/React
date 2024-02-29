import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:1, name:"Lalit"},
    {id:2, name:"Piyush"},
    {id:3, name:"Yogesh"}
]

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                name:action.payload
            }
            if(todo.name.trim()!==""){
                state.push(todo)
            }
        },
        removeTodo:(state,action)=>{
          return state.filter((v)=>v.id!==action.payload)
        },
        // in your removeTodo reducer, you're attempting to reassign state directly with state.filter(...). This approach won't work as expected with Redux Toolkit's usage of Immer, because Immer expects you to either mutate the existing state directly or return a new state, but not both.
        updateTodo:(state,action)=>{
            if(action.payload.name.trim()!==""){
                return state.map((v)=>(v.id===action.payload.id)?action.payload:v)
            }
        }

    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;