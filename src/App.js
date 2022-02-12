
import './App.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sayyoh from "./Components/Pages/Sayyoh";
import Navbar from './Components/Basic Page/Navbar';
import Home from "./Components/Basic Page/Home";
import AboutWe from "./Components/Pages/About/AboutWe";
import "./App.css";
import "./App.css";
import AllCart from "./Components/Pages/AllCart";
import Footer from "./Components/Basic Page/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sayyohlar" element={<Sayyoh />} />
        <Route path="/about" element={<AboutWe />} />
        <Route path="/chorvoq" element={<AllCart />} />
        <Route path="/amirsoy" element={<AllCart />} />
        <Route path="/chimyon" element={<AllCart />} />
        <Route path="/bostonliq" element={<AllCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
