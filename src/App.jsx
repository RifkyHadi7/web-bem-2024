import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Landing";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Navbar from "./page/Compponent/Navbar";
import Tentangpage from "./page/Tentangpage";
import ComingSoon from "./page/ComingSoon";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/tentang" element={<Tentangpage />} />
        <Route exact path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
