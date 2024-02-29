import React, { useContext } from 'react'
import { property } from './ContextHook'

function Child1() {

    const prop = useContext(property)
  return (
    <div>
      Child 1 {prop}
    </div>
  )
}

export default Child1
