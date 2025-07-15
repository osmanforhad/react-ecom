import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/fashion" element={<Fashion />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
