import React,{useReducer} from "react";

// useState is a basic Hook for managing simple state transformation, 
// and useReducer is an additional Hook for managing more complex state logic
// the main advantage of using the useReducer() is that it allows us to manage complex state changes in a single, 
// centralized place. We can define all of our state updates and actions in the reducer() function,

function ReducerHook(){
    let val = {n:0}

    const red = (s,a)=>{
        switch(a.x){
            case "hello":
            return {n:s.n+1}

            case "Lalit":
            return {n:s.n-1}
        }
        
    }

    const [state,dispatch] = useReducer(red,val)

    return(
        <>
        <button onClick={()=>{dispatch({x:"hello"})}}>+</button>
        <button onClick={()=>{dispatch({x:"Lalit"})}}>-</button>
        {state.n}
        </>
    )
}

export default ReducerHook;