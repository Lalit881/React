import logo from './logo.svg';
import './App.css';
import ModalDialog from './ModalDialog';
import { useState } from 'react';


function App() {
 const [show,setShow] = useState(false)


  return (
    <div className='App'>

      <button onClick={()=>{
        setShow(true)
      }}>Open Model</button>


      <ModalDialog isOpen={show}>
        <h3>Hello Alert</h3>
        <button onClick={()=>{
        setShow(false)
      }}>Close</button>
      </ModalDialog>
    </div>
  );
}

export default App;
