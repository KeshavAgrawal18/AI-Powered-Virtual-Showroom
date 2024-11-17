import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ARViewer from "./components/ARViewer";
import Recommender from "./components/Recommender";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ar-viewer" element={<ARViewer />} />
        <Route path="/recommender" element={<Recommender />} />
      </Routes>
    </Router>
  );
}

export default App;
