import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Addusers from "./Addusers";
import Edituser from "./Edituser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/home" className="btn btn-primary my-3">
          View Users
        </Link>

        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/create" element={<Addusers />}></Route>
          <Route path="/edit/:userId" element={<Edituser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
