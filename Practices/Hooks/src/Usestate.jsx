import React, {useState} from "react";

function Lalit(){
    const [color, setColor] = useState("green");
    const [str , setStr] = useState("Hello")

    const handleclick = ()=>{
        const xyz = color === "green" ? "blue" : "green"
        const zyx = str === "Hello" ? "Lalit" : "Hello"
        setColor(xyz);
        setStr(zyx);
    }

    return(
        <div>
            <h1 style={{backgroundColor: color}}>{str}</h1>
            <button onClick={handleclick}>Change</button>
        </div>
    )
}


export default Lalit;