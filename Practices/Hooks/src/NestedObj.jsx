import React from "react";
import { useState } from "react";


const intialVal = {
    name: "Test1",
    address: {
        city:{
            name:"ahd",
            area:"SG"
        }
    }
}




function NestedObj(){

    const [obj, setObj] = useState(intialVal);
    const handleclick = ()=>{
        setObj({
          ...obj,//spread operator
          address:{

            ...obj.address,
            city:{

                ...obj.address.city,
                area:"CG"
            }
          }
        })
      }
    return(
        <div className="App">
            <li>{obj.name}</li>
            <li>{obj.address.city.name}</li>
            <li>{obj.address.city.area}</li>

            <button onClick={handleclick}>Change Area</button>
        </div>
    )
}

export default NestedObj;