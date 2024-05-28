import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Landing";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Navbar from "./page/Compponent/Navbar";
import Tentangpage from "./page/Tentangpage";
import ComingSoon from "./page/ComingSoon";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/tentang" element={<Tentangpage />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
