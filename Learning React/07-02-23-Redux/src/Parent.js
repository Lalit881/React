import React, { createContext, useContext } from 'react'
import Child1 from './Child1'
import { property } from './ContextHook'



function Parent() {

    const prop = useContext(property)
  return (
    <div>
      Parent has now {prop}
      <Child1/>
    </div>
  )
}

export default Parent
