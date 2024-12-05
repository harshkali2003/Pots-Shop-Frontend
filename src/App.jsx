import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import MainFile from "./Components/MainFile";
import NavBar from "./Components/NavBar";
import About from "./Navigations/About";
import Contact from './Navigations/Contact'
import Faq from "./Navigations/Faq";
import Products from "./Navigations/Products";
import LogIn from "./Navigations/LogIn";
import SignUp from "./Navigations/SignUp";

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
          <Route path="/product" element={<Products/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
