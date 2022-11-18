import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import TextField from "@mui/material/TextField";
// import * as React from 'react';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { height } from "@mui/system";
import axios from "axios";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const Profile = () => {

  const[name, setName] = useState("");
  const[gender, setGender] = useState("");
  const[category, setCategory] = useState("");
  const[college, setCollege] = useState("");
  const[state, setState] = useState("");
  const[dob, setDob] = useState("");
  const[income, setIncome] = useState("");

  const accessToken = localStorage.getItem("token");
  const url = `https://scholarpad.herokuapp.com/api/v1/edit`;
  const submit = () =>{
    const data = {
      "college": college,
      "state" : state,
      "dob" : dob,
      "category" : category,
      "income" : +income,
      "gender" : gender,
      "accessToken" : accessToken
    }
    console.log(data);
    axios.patch(url, data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="main-body">
        <Navbar />
        <div className="headings">
          <div className="leftHeading">
            <h1 style={{ color: "#F1D112" }}>Create Your Profile</h1>
          </div>
          
        </div>
        <div className="input-fields">
          <div className="leftFields">
            <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
              className="textField"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              InputLabelProps={{ style: { fontSize: 17, color: "black", fontWeight:"bolder" } }}
            />
            <div className="inputCandidate">
                <FormControl fullWidth size="small">
                {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
                <Select
                className="textField"
                style={{ marginTop: "40px", width:"70%" }}
                sx={{ width: { sm: 200, md: 210 } }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  autoComplete="off"
                  required
                    variant="outlined"
                    size="small"
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                  // onBlur={handleFocusGender}
                  // focused={focused.toString()}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                  
                </Select>
                </FormControl>
                </div>
            <TextField
              className="textField"
              id="outlined-basic"
              label="College"
              variant="outlined"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              InputLabelProps={{ style: { fontSize: 17, color: "black", fontWeight:"bolder" } }}
              style={{ marginTop: "40px" }}
            />
            <TextField
              className="textField"
              id="outlined-basic"
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              variant="outlined"
              InputLabelProps={{ style: { fontSize: 17, color: "black", fontWeight:"bolder" } }}
              style={{ marginTop: "40px" }}
            />
          </div>
          <div className="rightFields">
            <TextField
            style={{width:"55%"}}
              className="textField"
              id="outlined-basic"
              label="Enter your DOB  (dd/mm/yyyy)"
              variant="outlined"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputLabelProps={{ style: { fontSize: 17, color: "black" , fontWeight:"bolder" } }}
            />
            <div className="inputCandidate">
                <FormControl fullWidth size="small">
                {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
                <Select
                className="textField"
                style={{ marginTop: "40px", width:"55%" }}
                sx={{ width: { sm: 200, md: 210 } }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  autoComplete="off"
                  required
                    variant="outlined"
                    size="small"
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  // onBlur={handleFocusGender}
                  // focused={focused.toString()}
                >
                  <MenuItem value={"Male"}>General</MenuItem>
                  <MenuItem value={"Female"}>OBC</MenuItem>
                  <MenuItem value={"Other"}>SC/ST</MenuItem>
                  
                </Select>
                </FormControl>
                </div>
            <TextField
            style={{width:"55%", marginTop: "40px" }}
              className="textField"
              id="outlined-basic"
              label="Yearly Family Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              variant="outlined"
              InputLabelProps={{ style: { fontSize: 17, color: "black", fontWeight:"bolder" } }}
              
            />
            
          </div>
        </div>
        <div className="rightButton">
            <button className="button" onClick={submit}>Update Your Profile</button>
          </div>
      </div>
    </>
  );
};

export default Profile;
