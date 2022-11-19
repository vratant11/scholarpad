
import React,{useEffect,useRef,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error/Error";
import FormStructure from "./Components/Register/Register";
import alanBtn from "@alan-ai/alan-sdk-web";
import Login from "./Components/Login/Login";
import Otp from "./Components/Otp/Otp";
import Home from "./Components/Homepage/Home";
import Profile from "./Components/Profile/Profile";
// import National from "./Components/National/National";
import National from "./Components/National/National"
import International from "./Components/International/International"
// import FormStructure from "./form/Registration";

function App() {
  const alanBtnInstance = useRef(null);
  const [toggle,setToggle] = useState(false)
  useEffect(()=>{
    if(!alanBtnInstance.current){
      alanBtnInstance.current = alanBtn({
        key:
        "70b2ab74ff0170b9997fd0f816e9fafb2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData)=>{
          if(commandData.command === "toggleColorMode"){
            window.open("https://youtube.com","_blank");

          } else if(commandData.command === "openSourceCode"){
            window.open("https://github.com/shubhi182001/scholarpad","_blank");
          }
          else if(commandData.command === "register"){
            window.open("http://127.0.0.1:5173/register","_blank");
          }
        }
      })
    }
  },[]); 
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<FormStructure />} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/login" element={<Login/>} />  
        <Route path="/profile" element={<Profile/>}/>  
        <Route path="/national" element={<National/>}/>  
        <Route path="/international" element={<International/>}/>  



      </Routes>
      {/* <p id="transcript">Transcript: {transcript}</p> */}
    </Router>
  );
}

export default App;
