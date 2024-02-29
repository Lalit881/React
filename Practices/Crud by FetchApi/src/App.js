
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Form from './Form';
import View from './View';
import ViewData from "./ViewData";
import Edit from "./Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form/>}></Route>
            <Route path="/view" element={<View/>}></Route>
            <Route path="/viewdata/:vid" element={<ViewData/>}></Route>
            <Route path="/editdata/:eid" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
