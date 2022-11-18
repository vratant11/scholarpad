import React from "react";
import "./Login.css";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import axios from "axios";



const Login = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [visibleIcon, setVisibleIcon] = useState(false);
  const [PasswordErrorType, setPasswordErrorType] = useState(false);
  const [error, setError] = useState({});
  const [errorMsg, setErrorMsg] = useState({});
  const [focused, setFocused] = useState(false);

  const handleFocusEmail = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email === "") {
      setError({ ...error, ...{ studentEmail: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentEmailError: "Email is required" },
      });
      return false;
    } else if (!regex.test(email.trim())) {
      setError({ ...error, ...{ studentEmail: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentEmailError: "Enter valid College email id" },
      });
      return false;
    } else if (regex.test(email.trim())) {
      setError({ ...error, ...{ studentEmail: false } });
      return true;
    }
  };

  const handleFocusPassword = () => {
    const regex1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // const regex2 = /^[0-9]{10}$/;
    if (password === "") {
      setError({ ...error, ...{ studentPassword: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentPasswordError: "Password is required" },
      });
      return false;
    } else if (regex1.test(password.trim())) {
      setError({ ...error, ...{ studentPassword: false } });
      return true;
    }
  };

  

//   const validatePassword = (value) => {
//     let error;
//     const regex = /^[A-Za-z]{3,}[@][0-9]{7,8}$/;
//     if (!value) {
//       error = "Password is required";
//       setPasswordErrorType(true);
//     //   setRoutepass(false);
//     //   setCredential(false);
//     } else if (!regex.test(value)) {
//       error = "Password is incorrect";
//       setPasswordErrorType(true);
//     //   setRoutepass(false);
//     //   setCredential(false);
//     } else {
//       setPasswordErrorType(false);
//     //   setRoutepass(true);
//     //   setCredential(true);
//     }
//     return error;
//   };


  const seen = () => {
    setEye(!eye);
    setVisibleIcon(!visibleIcon);
  };
  const passwordFocus = (e) => {
    setFocused(true);
    // setStudentPasswordError(validatePassword(password));
  };

  const submit = () =>{
    if(
      handleFocusEmail() &&
      handleFocusPassword()
    ){
      const data = {
        "email": email,
        "password" : password
      }
      console.log(data);
      axios
        .post("https://scholarpad.herokuapp.com/api/v1/signin", data)
        .then((res) => {
          console.log(res);
          window.alert("Logged in successfully");
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <h1 className="heading">LOGIN</h1>
        <TabContext value={value}>
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab style={{fontSize:"30px", fontWeight:"bolder"}} label="LOGIN" value="1" href="/login" />
              
            </TabList>
          </Box> */}
          {/* <TabPanel value="1">
            <TextField
              id="standard-basic"
              label="Enter Aadhar Card Number"
              variant="standard"
              fullWidth
              InputLabelProps={{ style: { fontSize: 17 } }}
              style={{ width: "110%", fontSize: "17px" }}
            />
            <Button className="logbtn">Log In</Button>
            <p className="desc">
              Don't have an account ?{" "}
              <a href="/" style={{ color: "blue",textDecoration:"none" }}>
                Register
              </a>
            </p>
          </TabPanel> */}
          <h1 id="login-heading">Login</h1>
          <TabPanel  value="1">
            <Box sx={{ display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"10%" }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                error={error.studentEmail ? true : false}
                helperText={
                  error.studentEmail ? errorMsg.studentEmailError : null
                }
                type="email"
                value={email}
                name="email"
                onChange={(e) =>  setEmail(e.target.value)}
                label="Enter your email address"
                variant="standard"
                style={{ width: "90%", fontSize: "17px" }}
                InputLabelProps={{ style: { fontSize: 17 } }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"5%" }}>
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }}/>
            
            <TextField
              autoComplete="off"
              my={10}
              label="Password"
              name="password"
              variant="standard"
              style={{ width: "90%", fontSize: "17px" }}
              size="small"
              className="input_field"
            //   error={PasswordErrorType ? true : false}
              onBlur={passwordFocus}
              focused={focused.tostring}
              type={eye ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // font size of input text
              InputLabelProps={{ style: { fontSize: 17 } }} // font size of input label
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={seen}>
                      {visibleIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: { fontSize: 15 },
              }}
            />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"10%", marginLeft:"15%" }}>

            <p style={{marginLeft:"50%"}}><a style={{textDecoration:"none", color:"#7D7D7D"}} href="/">Forgot Password ?</a> </p>
            </Box>
            <Button className="log2btn" onClick={submit}>Log In</Button>
            <p className="desc2">
              Don't have an account ?{" "}
              <a href="/" style={{ color: "blue", textDecoration:"none" }}>
                Register
              </a>
            </p>
          

          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Login;
