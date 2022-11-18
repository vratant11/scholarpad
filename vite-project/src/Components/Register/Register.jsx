import { Button, TextField, useTheme } from "@mui/material";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "./Register.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FormStructure = () => {

  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [eye, setEye] = useState(false);
  const [visibleIcon, setVisibleIcon] = useState(false);
  const [PasswordErrorType, setPasswordErrorType] = useState(false);
  const [focused, setFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  // const navigate = useNavigate();

  const [flag, setFlag] = useState("0");
  const [loader, setLoader] = useState(false);

  const handleFocusName = () => {
    const regex = /^[A-Za-z ]{2,40}$/;
    if (studentName === "") {
      console.log(error);
      console.log(errorMsg);

      setError({ ...error, ...{ studentName: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentNameError: "Name is required" },
      });
      return false;
    } else if (!regex.test(studentName.trim())) {
      setError({ ...error, ...{ studentName: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentNameError: "Name must be in alphabets " },
      });
      return false;
    } else if (studentName.toString().trim() === "") {
      setError({ ...error, ...{ studentName: true } });

      setErrorMsg({
        ...errorMsg,
        ...{ studentNameError: "Enter name!" },
      });
      return false;
    } else if (studentName || regex.test(studentName.trim())) {
      setError({ ...error, ...{ studentName: false } });
      return true;
    }
  };
  const handleFocusPhoneNumber = () => {
    const regex2 = /^[0-9]{10}$/;
    const regex3 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (phoneNumber === "") {
      setError({ ...error, ...{ phoneNumber: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ phoneNumberError: "Phone number is required" },
      });
      return false;
    } 
    else if (!regex2.test(phoneNumber.trim())) {
      setError({ ...error, ...{ phoneNumber: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ phoneNumberError: "Phone number must be 10 digit" },
      });
      return false;
    } 
    
    else if (regex3.test(phoneNumber.trim())) {
      setError({ ...error, ...{ phoneNumber: false } });
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
  const handleFocusEmail = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (Email === "") {
      setError({ ...error, ...{ studentEmail: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentEmailError: "Email is required" },
      });
      return false;
    } else if (!regex.test(Email.trim())) {
      setError({ ...error, ...{ studentEmail: true } });
      setErrorMsg({
        ...errorMsg,
        ...{ studentEmailError: "Enter valid College email id" },
      });
      return false;
    } else if (regex.test(Email.trim())) {
      setError({ ...error, ...{ studentEmail: false } });
      return true;
    }
  };
  const seen = () => {
    setEye(!eye);
    setVisibleIcon(!visibleIcon);
  };
  const passwordFocus = (e) => {
    setFocused(true);
    // setStudentPasswordError(validatePassword(password));
  };

  const Submit = (e) => {
    console.log("bajsbhj")
    // setLoader(true);
    // if()

    if(handleFocusPhoneNumber()){
      console.log("name")
    }
    


    if (
      handleFocusName() &&
      handleFocusPhoneNumber() &&
      handleFocusPassword() &&
      handleFocusEmail()

      // flag === "1"
    ) {
      const data = {
        "userName": studentName,
        "email": Email,
        "mobile": +phoneNumber,
        "password": password,
      };
      console.log(data);
      axios
        .post("https://scholarpad.herokuapp.com/api/v1/signup", data)
        .then((res) => {
          console.log(res);
          const accessToken = res.data.accessToken;

          window.alert("Registered Successfully and OTP sent!")
          navigate('/otp',{ 
            state:{
              accessToken:accessToken
            }
          })

          // if (flag === "1") {
          //   if (
          //     res.data.msg === "This mobile number already exist" ||
          //     res.data.msg === "This Email already exist" ||
          //     res.data.msg === "This Student number already exist" ||
          //     res.data.msg === "This roll number already exist"
          //   ) {
          //     // setSuccess(false);
          //     toast.error("Invalid credential or user already exist");
          //   } else if (res.data.id) {
          //     // setMessage(res.data.msg);
          //     localStorage.setItem("register", true);
          //     navigate("/");
          //     setLoader(false);
          //     // setSuccess(true);
          //     // console.log(res.data.msg);
          //     // alert("registered");
          //   }
          // }
        })
        .catch((err) => {
          console.log(err);
          // console.log(res.msg);

          // toast.error("Invalid credential or user already exist");
          // setLoader(false);
        });
        
        // alert("registered");
      }
      else{
        console.log("first")
      }
    // } else {
    //   if (!Email && !password && !phoneNumber && !studentName) {
    //     toast.error("Complete all fields");
    //   } else {
    //     toast.error("Invalid credentials");
    //   }
    //   setLoader(false);
    // }
  };

  // useEffect(() => {
  //   let register = localStorage.getItem("register");
  //   if (register) {

  //     navigate("/confirm");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="main_container">
      <div className="main_outerContainer">
        <div className="outerContainer">
          <h1 id="register">Register</h1>
          {/* <div className="hospital">
            <h2>USER</h2>
          </div> */}

          <div className="formContainer">
            <div className="leftContainer">
              <div className="input_container" style={{display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"5%"}}>
            
                <AccountCircleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="studentName"
                  variant="standard"
                  error={error.studentName ? true : false}
                  size="small"
                  style={{ width: "100%", fontSize: "17px" }}
                  type="text"
                  className="input_field"
                  label="Name"
                  name="Name"
                  helperText={
                    error.studentName ? errorMsg.studentNameError : null
                  }
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  onBlur={(e) => handleFocusName(e)}
                />
              </div>
              <div className="input_container" style={{display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"5%"}}>
     
                <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  error={error.phoneNumber ? true : false}
                  id="phoneNumber"
                  size="small"
                  variant="standard"
                  style={{ width: "90%", fontSize: "17px" }}
                  type="text"
                  className="input_field"
                  label="Mobile no."
                  name="phoneNumber"
                  value={phoneNumber}
                  helperText={
                    error.phoneNumber ? errorMsg.phoneNumberError : null
                  }
                  onChange={(e) =>  setPhoneNumber(e.target.value) }
                  onBlur={(e) => handleFocusPhoneNumber(e)}
                />
              </div>
              <div className="input_container" style={{display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"5%"}}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  error={error.studentEmail ? true : false}
                  helperText={
                    error.studentEmail ? errorMsg.studentEmailError : null
                  }
                  size="small"
                  type="email"
                  variant="standard"
                  className="input_field emailinp"
                  placeholder="Email: xyz@gmail.com"
                  style={{ width: "100%", fontSize: "17px" }}
                  label="Email"
                  name="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleFocusEmail}
                />
              </div>
              
              <div className="input_container" style={{display: "flex", alignItems: "flex-end" ,width:"120%", marginBottom:"5%"}}>
               
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }}/>
                <TextField
                  error={error.studentPassword ? true : false}
                  helperText={
                    error.studentPassword ? errorMsg.studentPasswordError : null
                  }
                  autoComplete="off"
                  variant="standard"
                  size="small"
                  // type="text"
                  style={{ width: "100%", fontSize: "17px" }}
                  className="input_field"
                  label="Password"
                  name="password"
                  value={password}
                  type={eye ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={handleFocusPassword}
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
                  // focused = {focused.toString}
                />
              </div>
            </div>
          </div>
          <div className="input_container">
            <Button
              size="medium"
              sx={{ width: 150, color: "black" }}
              className="btn"
              onClick={Submit}
            >
              {/* {loader ? (
                <TailSpin
                  height="20"
                  width="20"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                "Register"
              )} */}
              Register
            </Button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default FormStructure;
