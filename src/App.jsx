import React, { useState, useEffect } from "react";
import Preloader from "./components/Home/Preloader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ParticleEffect from "./components/ParticleEffect";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <>
        <Navbar />
        <ParticleEffect />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </>
    </Router>
  );
};

export default App;