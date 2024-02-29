import React, { useReducer } from 'react'

function UseReducerHook() {

    // const [state,Dispatch] = useReducer(reducerFun,initialValues)
    const val = {num:0}

    const reducerFun = (state,action)=>{
        // console.log(state);//state = {num:0}
        // console.log(action);//action = {type:"inc"}
        // console.log(action.type)

        switch(action.type)//"inc"//"dec"
        {
            case "inc":
                return {num: state.num+1}

                case "dec":
                    return {num: state.num-1}
                
                default:
                    return state;
        }

    }

    const [state,Dispatch] = useReducer(reducerFun,val)
  return (
    <div>
      <button onClick={()=>{Dispatch({type:"inc"})}}>+</button>


            {state.num}


 <button onClick={()=>{Dispatch({type:"dec"})}}>-</button>


    </div>
  )
}

export default UseReducerHook
