import { Route, Routes } from "react-router-dom";
import About from "./PAGES/About/About";
import Navbar from "./PAGES/SHARED/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<home/>}></Route>
        <Route path="" element={<About/>}></Route>
      </Routes>

  
    </div>
  );
}

export default App;
