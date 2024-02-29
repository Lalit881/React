import logo from './logo.svg';
import './App.css';
import ContextHook from './ContextHook';
import UserreducerHook from './UserreducerHook';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action';

function App() {
 const counter =  useSelector(state => state.x)
 const dispatch = useDispatch();
  return (
    <div className="App">
    <ContextHook/>
    {/* <UserreducerHook/> */}
    <button onClick={()=>{dispatch(decrement())}}>-</button>
{counter}
    <button onClick={()=>{dispatch(increment())}}>+</button>
    </div>
  );
}

export default App;
