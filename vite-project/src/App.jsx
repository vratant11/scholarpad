
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";
import FormStructure from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Otp from "./Components/Otp/Otp";
import Home from "./Components/Homepage/Home";
// import FormStructure from "./form/Registration";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<FormStructure />} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/login" element={<Login/>} />        
      </Routes>
    </Router>
  );
}

export default App;
