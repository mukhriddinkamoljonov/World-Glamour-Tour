import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Sayyohlar from "./Components/Sayyohlar";
import Main from "./Pages/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
        <Link to="/sayyohlar">Sayyohlar</Link>
        <Routes>
          <Route path="/sayyohlar" element={Sayyohlar} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
