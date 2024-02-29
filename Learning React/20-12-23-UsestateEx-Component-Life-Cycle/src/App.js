import logo from './logo.svg';
import './App.css';
import ComponetLifeCycle from './ComponetLifeCycle';
import UsestateEx1 from './UsestateEx1';
import UsestateString from './UsestateString';
import UsestateBoolean from './UsestateBoolean';
import UsestateObject from './UsestateObject';
import UsestateArray from './UsestateArray';


// const list = [
//   {title:"title 1"},
//   {title:"title 2"},
//   {title:"title 3"}
// ]

function App() {



  return (
    <div className="App" style={{background:"gray"}}>
    
   {/* <ComponetLifeCycle/> */}

   {/* <UsestateEx1/> */}
   {/* <UsestateString/> */}
   {/* <UsestateBoolean/> */}
   {/* <UsestateObject/> */}

<UsestateArray/>      
    </div>
  );
}

export default App;
