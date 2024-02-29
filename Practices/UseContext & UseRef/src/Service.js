import React, { useRef } from "react";

function Service(){
    let ref = useRef(null);

    const handleClick =()=>{
        ref.current = ref.current+1;
    alert(ref.current)
    }

    return(
        <>
            <div onClick={handleClick} >Service</div>
        </>
    )
}

export default Service;