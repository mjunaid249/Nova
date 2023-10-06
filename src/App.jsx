import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Nova" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
