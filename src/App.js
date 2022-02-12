import './App.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sayyoh from "./Components/Pages/Sayyoh";
import Navbar from './Components/Basic Page/Navbar';
import Home from './Components/Basic Page/Home';
import AboutWe from './Components/Pages/About/AboutWe';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sayyohlar" element={<Sayyoh />} />
        <Route path="/about" element={<AboutWe />} />
      </Routes>
    </div>
  );
}

export default App;
