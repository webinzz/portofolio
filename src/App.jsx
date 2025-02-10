// import Home from "./page/home"
import Home from "./page/home"
import { BrowserRouter as  Router, Routes, Route, } from "react-router-dom";
import About from "./page/about";
import Project from "./page/project"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import ScrollToTop from './scrolltop';




const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false,  });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
  </Router>
  );
};

export default App;
