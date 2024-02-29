import React, { useState } from 'react'

const intialVal = {
    name:"Test1",
    email:"e@gmail.com",
    address:{
        city:{
            name:"ahd",
            area:"SG"
        }
    }
}
function NestedObj() {

    const [obj,setObj] = useState(intialVal);
  return (
    <div className='App'>
        <li>{obj.name}</li>
        <li>{obj.email}</li>
        <li>{obj.address.city.name}</li>
        <li>{obj.address.city.area}</li>

        <button onClick={()=>{
         setObj(
            {
                ...obj,
                name:"xyz",
                email:"abc@gmail.com"
            }
            )

        }}>Change Area</button>
    </div>
  )
}

export default NestedObj





