import { Route, Routes } from "react-router-dom";
import About from "./PAGES/About/About";
import Home from "./PAGES/HOME/Home";
import Login from "./PAGES/Login/Login";
import Navbar from "./PAGES/SHARED/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>

  
    </div>
  );
}

export default App;
