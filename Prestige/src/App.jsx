// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Innovations from "./component/Innovations";
import Footer from "./component/Footer";
import TestimonialsSlider from "./component/TestimonialsSlider";
import Blog from "./component/Blog";
import BlogDetail from "./component/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog/:id" element={<BlogDetail />} />
        
        <Route path="*" element={
          <>
            {/* <Innovations /> */}
            <TestimonialsSlider />
            <Blog />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;