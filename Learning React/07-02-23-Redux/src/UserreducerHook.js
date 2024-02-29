import React, { useReducer } from 'react'

const initialVal = {num:1};

function UserreducerHook() {

    const reducerFun =(state,action)=>{
        switch(action.x)
        {
            case "inc":
                return {num:state.num +1}

                case "dec":
                return {num:state.num -1}

                default:
                return state;

        }
    }

   const [state,dispatch] =  useReducer(reducerFun,initialVal)
  return (
    <div>
        <button onClick={()=>{dispatch({"x":"inc"})}}>+</button>

      <h4>{state.num}</h4>

      <button onClick={()=>{dispatch({"x":"dec"})}}>-</button>

    
    </div>
  )
}

export default UserreducerHook
