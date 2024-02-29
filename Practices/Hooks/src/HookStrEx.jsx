import React,{useState} from "react";

function Ex(){

    const [name, setName] = useState("Lalit");
    const [age, setAge] = useState("23");
    return(
        <div style={{margin:"20px"}} >
            Name:<input type="text" value={name} onChange={(e)=>{
                setName(e.target.value) // target?
            }} ></input><br/>
            age:<input type="number" value={age} onChange={(e)=>{
                setAge(e.target.value)
            }} ></input><br/>

            Hello {name} Your age is {age}{<br/>}

            <button onClick={()=>{ 
                setName("Neha")
                setAge(22)
            }}>Change</button>
        </div>
    )
}


export default Ex;