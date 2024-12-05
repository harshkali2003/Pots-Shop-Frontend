import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import MainFile from "./Components/MainFile";
import NavBar from "./Components/NavBar";
import About from "./Navigations/About";
import Contact from './Navigations/Contact'
import Faq from "./Navigations/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<MainFile />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<Faq/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
