import "./App.css";
import Carts from "./Components/Carts";
import Count from "./Components/Count";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import WelcomeArea from "./Components/WelcomeArea";
import "./Pages/Main.css";

function App() {
  return (
    <div>
      <div id="preloader">
        <div id="status">&nbsp;</div>
      </div>
      <Navbar />
      <Slider />
      <Carts />
      <WelcomeArea />
      <Count />
      <Footer />
    </div>
  );
}

export default App;
