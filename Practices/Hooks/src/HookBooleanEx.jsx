import React, {useState} from "react";
function Ex1(){

    const [bool,setBool] = useState(true)

    
    return(
        <div style={{margin:"20px"}}>
         <input type="checkbox" onChange={(e)=>{
            setBool(e.target.checked)
         }} />
         {(bool)?"Hello":"Lalit"}
        </div>
    )
}
export default Ex1;