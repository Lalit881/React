import React, { useEffect, useState } from 'react'

function UseEffectWithDependencies() {

    const [num,setNum] = useState(23)
    const [str,setStr] = useState("string")

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err.message)})

        // document.write(num)
        
        // let x = num;
        // let y = str;
        // document.write(x +" " +y)

      

    },[num,str])




  return (
    <div>

       
      
    </div>
  )
}

export default UseEffectWithDependencies
