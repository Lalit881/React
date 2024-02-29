import React, { useState } from 'react'

function UsestateBoolean() {

    const [bool,setBool] = useState(true);

    const handleClickj = ()=>{
        setBool(false)
    }

  return (
    <div>

        {(bool) ? "T" : "F"}

        <button onClick={handleClickj}>Click </button>
        
      
    </div>
  )
}

export default UsestateBoolean
