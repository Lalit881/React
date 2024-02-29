import React, { useRef } from "react";
import { prop } from "./UseContextHook";
import { useContext } from "react";

function Home(){

    const t = useContext(prop)
    const varRef = useRef();
    // console.log(varRef.current)
    // By Using a ref
    // You can store information between re-renders (unlike regular variables, which reset on every render)
    // Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
    // The information is local to each copy of your component (unlike the variables outside, which are shared).
    // It’s particularly common to use a ref to manipulate the DOM. React has built-in support for this.

    
    function test(){
    varRef.current.style.color = "blue"  // why when refresh the page its show error
    }

    return(
        <>
            <div ref={varRef} onClick={test} >Home {t}</div>
        </>
    )
}

export default Home;