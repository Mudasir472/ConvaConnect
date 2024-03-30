import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Navbar from "./components/NavBar";
import { Login } from "./components/Pages/Login";
import { SignUp } from "./components/Pages/SignUp";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ConvaConnect" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </div>
        <div style={{backgroundColor: "gray"}} className="footer">
          <Footer/>
        </div>
      </Router>
  </>
  );
}

export default App;
