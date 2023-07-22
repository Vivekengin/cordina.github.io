import React, { useState, useEffect } from 'react';
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css";
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
const App = () => {
  return(
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/service" element={<Service />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="*" element={<Navigate to= "/" />} />


</Routes>
{Location.pathname !== '/' && <Footer />}

</>
  );
};

export default App;