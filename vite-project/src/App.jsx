import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Error from "./Error/Error";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FormStructure from "./Components/Register/Register";
import alanBtn from "@alan-ai/alan-sdk-web";
import Login from "./Components/Login/Login";
import Otp from "./Components/Otp/Otp";
import Home from "./Components/Homepage/Home";
import Profile from "./Components/Profile/Profile";
// import National from "./Components/National/National";
import National from "./Components/National/National";
import International from "./Components/International/International";
import List from "./Components/Lists/List";
// import FormStructure from "./form/Registration";

function App() {
  const alanBtnInstance = useRef(null);
  // const navigate = useNavigate();

  // const [toggle,setToggle] = useState(false)
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "70b2ab74ff0170b9997fd0f816e9fafb2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          if (commandData.command === "youtube") {
            window.location.replace("https://www.youtube.com/");
          } else if (commandData.command === "sourcecode") {
            window.location.replace(
              "https://github.com/shubhi182001/scholarpad"
            );
          } else if (commandData.command === "register") {
            window.location.replace("/register");
          } else if (commandData.command === "home") {
            window.location.replace("/");
          } else if (commandData.command === "back") {
            history.back();
          }
          else if (commandData.command === "list") {
            window.location.replace("/list");
          }
          else if (commandData.command === "profile") {
            window.location.replace("/profile");
          }
          
        },
      });
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormStructure />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/national" element={<National />} />
        <Route path="/international" element={<International />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
