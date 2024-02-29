
import { useEffect, useRef } from 'react';
import './App.css';


function App() {

  const Arr = [
    {id : 1},
    {id : 2},
    {id : 3},
    {id : 4}
  ]
  const Color = [
    {color:"pink"},
    {color:"purple"},
    {color:"yellow"},
    {color:"green"}
  ]
  const refs = useRef([]);

  useEffect(()=>{
    refs.current.map((v,i)=>{
      if(v){
       v.style.backgroundColor = Color[i].color
      }

    })

  },[])
  
  return (
    <div className="App">
      {Arr.map((v,i)=>(
        <div ref={refArr=>(refs.current[i]=refArr)}>{v.id}</div>
      ))}
    </div>
  );
}

export default App;
