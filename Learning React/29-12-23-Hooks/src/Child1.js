import React, { useContext } from 'react'
import { prop } from './UseContext'



function Child1() {
    const property = useContext(prop)
  return (
    <div>
      CHILD 1 has also {property}
    </div>
  )
}

export default Child1
