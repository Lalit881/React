import React, { createContext } from 'react'
import ParentCompo from './ParentCompo'

export const prop = createContext();

function UseContext() {
  return (
    <div>
        <prop.Provider value={200}>
                <ParentCompo/>
        </prop.Provider>
     
    </div>
  )
}

export default UseContext
