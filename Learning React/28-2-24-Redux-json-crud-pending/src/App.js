import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Adduser from './Adduser';
import Edituser from './EditUser';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Link to="/home">Home</Link>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/adduser' element={<Adduser/>}></Route>
      <Route path='/edituser/:empId' element={<Edituser/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
