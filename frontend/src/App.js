import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Simulation from './pages/Simulation';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
