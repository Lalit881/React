import React, { useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";

function App(){

  return(
    <div className="App">
    <BrowserRouter>
      <Link to='/Home'>Home</Link>{" "}
      <Link to='/About'>About</Link>{" "}
      <Link to='/Services'>Services</Link>{" "}

    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Services' element={<Services/>}>
        <Route path='Service1' element={<Service1/>}></Route>
        <Route path='Service2' element={<Service2/>}></Route>
        <Route path='Service3' element={<Service3/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App