import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import Box from './Box';

function App() {
const data = [];

  for(let i=1;i<=50;i++)
  {
    data.push(<li>items {i}</li>)
  }


  return (
    <div className="App">
   
    {/* <Modal></Modal> */}

    <ul>      
      {data} 

      <Box/>
      {data} 
     
    </ul>

   
    </div>
  );
}

export default App;
