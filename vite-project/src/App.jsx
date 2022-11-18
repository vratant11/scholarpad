
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";
import FormStructure from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Otp from "./Components/Otp/Otp";
import Home from "./Components/Homepage/Home";
import National from "./Components/National/National";
import International from "./Components/International/International";
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
        <Route path="/national" element={<National/>} />
        <Route path="/international" element={<International/>}/>      

      </Routes>
    </Router>
  );
}

export default App;
