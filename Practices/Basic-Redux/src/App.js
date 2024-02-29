import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action';


function App(){
  const dispatch = useDispatch()
  const counter = useSelector(state => state.count);  // useSelector grab the whole reducer object from the store
  return(
      <div className='App'>
        <button onClick={()=>{dispatch(increment())}} >+</button>
        {counter}
        <button onClick={()=>{dispatch(decrement())}}>-</button>
      </div>
  ) 
}


export default App;
