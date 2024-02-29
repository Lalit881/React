import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./Slice";
import { useState } from "react";


function App() {
const [num,setNum] = useState("");
const counter = useSelector(state=>state.counter.value)
const dispatch = useDispatch()
  return (
    <>
      <div className="App">
        <button onClick={()=>(dispatch(increment()))} className="btn btn-info">+</button>
        {counter}
        <button onClick={()=>(dispatch(decrement()))} className="btn btn-info">-</button>
        <div>
        <input type="text"
          value={num}
          onChange={(e)=>{setNum(e.target.value)}}
         className="col-1"></input>
        <button onClick={()=>(dispatch(incrementByAmount(Number(num))))} className="btn btn-primary">ADD AMOUNT</button>

        </div>

      </div>
    </>
  );
}

export default App;
