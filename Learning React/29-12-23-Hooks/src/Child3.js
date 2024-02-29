import React, { useContext } from 'react'
import { prop } from './UseContext'


function Child3() {
    const property = useContext(prop)
  return (
    <div>
      CHILD 3 has now {property}
    </div>
  )
}

export default Child3
