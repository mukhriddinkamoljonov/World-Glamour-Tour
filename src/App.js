import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sayyoh from "./Components/Pages/Sayyoh";
import Navbar from "./Components/Basic Page/Navbar";
import Home from "./Components/Basic Page/Home";
import AboutWe from "./Components/Pages/About/AboutWe";
import AllCart from "./Components/Pages/AllCart";
import Footer from "./Components/Basic Page/Footer";
import Shaharlar from "./Components/Pages/Shaharlar";

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
        <Route path="/shaharlar" element={<Shaharlar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
