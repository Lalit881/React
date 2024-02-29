import React from 'react'



function FunctionPropEx({prop}) {
  return (
    <div>
      {(prop) ? "truePart": "FalsePart"}
    </div>
  )
}

export default FunctionPropEx

// FunctionPropEx.defaultProps ={
//     xyz:12
// }
