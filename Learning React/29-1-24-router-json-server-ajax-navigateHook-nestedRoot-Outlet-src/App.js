import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import ViewData from './ViewData';


// npm i react-router-dom
// npm install react-router-dom

function App() {
  return (
    <div className="App">

      

      <BrowserRouter>


      <Link to="/home">Home123</Link>{ " "}
      <Link to="/about">About</Link> { " "}
      <Link to="/services">Services</Link>

      <Routes>
        <Route path='/home' element={<Home/>}></Route>

        <Route path='/about' element={<About/>}></Route>

        <Route path='/services' element={<Services/>}>
            <Route path='services1' element={<Service1/>}></Route>
            <Route path='services2' element={<Service2/>}></Route>
            <Route path='services3' element={<Service3/>}></Route>
            <Route path='services4' element={<Service4/>}></Route>
        </Route>

        <Route path='/viewdata' element={<ViewData/>}></Route>
       
      </Routes>
      </BrowserRouter>

          

      
    </div>
  );
}

export default App;
