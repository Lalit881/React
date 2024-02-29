import React,{useState} from "react";

function Signin(){

    const [button, setButton]=useState("Sign In")
    const [per, setPer]=useState("Please Sign In")

    const handleclick =()=>{
        setButton((button==="Sign In")?"Sign Out":"Sign In")
        setPer((per==="Please Sign In")?"Welcome back, good to see you in here":"Please Sign In")
    }
    return(
        <div>
            <div>
                <button onClick={handleclick} type="button" >{button}</button>
                <p>{per}</p>
            </div>
        </div>
    )
}

export default Signin;