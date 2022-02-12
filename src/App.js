<<<<<<< HEAD
import './App.css';
import Main from './Pages/main';
import BlogPage from './Pages/blog';
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sayyoh from "./Components/Pages/Sayyoh";
>>>>>>> c42b9d1a352f9b9bc006d97c8b96f789a65eb029

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
