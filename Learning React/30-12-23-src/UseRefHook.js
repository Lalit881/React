import React, { createContext } from 'react'
import Parent from './Parent'

export const prop = createContext()

function UseRefHook() {
  return (
    <div>
      <prop.Provider value={"hi"}>
      <Parent></Parent>
      </prop.Provider>
    </div>
  )
}

export default UseRefHook
