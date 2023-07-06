import logo from "./logo.svg";
import "./App.css";
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Artikel from "./pages/Artikel";
import Order from "./pages/Order";
import About from "./pages/About";

const App =() =>{

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
