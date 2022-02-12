
import './App.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sayyoh from "./Components/Pages/Sayyoh";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sayyohlar" element={<Sayyoh />} />
      </Routes>
    </div>
  );
}

export default App;
