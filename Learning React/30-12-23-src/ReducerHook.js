import React, { useReducer } from 'react'

let val ={n:0};

function ReducerHook() {

    const red =(s,a)=>{

        // console.log(s); //s = {n:0}
        // console.log(a);//a = {x:"hi"}
        // console.log(a.x)

        switch(a.x)
        {
            case  "hi":
             return {n:s.n+1}

             case  "minus":
             return {n:s.n-1}

             case  "meet":
                return {n:"dkjfghkdjfh"}

             
        }


    }

    const [state,dispatch] = useReducer(red,val)

  return (
    <div>


    <button onClick={()=>{dispatch({x:"hi"})}}>+</button>

    <button onClick={()=>{dispatch({x:"minus"})}}>-</button>

    <button onClick={()=>{dispatch({x:"meet"})}}>CHANGE</button>

      {state.n}
    </div>
  )
}

export default ReducerHook


