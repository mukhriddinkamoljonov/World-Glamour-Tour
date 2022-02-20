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
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/sayyohlar" element={<Sayyoh />} />
        <Route path="/about" element={<AboutWe />} />
        <Route path="/places/:id" element={<AllCart />} />
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
