import React, { createContext } from 'react'
import Parent from './Parent'
import { useSelector } from 'react-redux';

export const property = createContext();



function ContextHook() {

  const val =  useSelector(state => state.x)
  return (
    <div>
     <property.Provider value={val}>
     <Parent/>
     </property.Provider>
    </div>
  )
}

export default ContextHook
