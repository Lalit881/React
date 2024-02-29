import React,{useState} from "react";


function Password(){

    const [pass,setPass] = useState("password")
    const [eye, setEye] = useState("fa-solid fa-eye")


    const handleclick =()=>{
        setPass((pass==="password")? "text" : "password")
        setEye((eye==="fa-solid fa-eye")? "fa-solid fa-eye-slash":"fa-solid fa-eye")
    
    }
    return(
        <div>
            Password:<span style={{position:"relative"}}><input type={pass} name="" id="" />
            <i onClick={handleclick} style={{position:"absolute", top:"6px" , right:"5px"}} class={eye}></i></span>
        </div>
    )
}

export default Password;