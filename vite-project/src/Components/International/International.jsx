import React, { useEffect } from "react";
import "./International.css";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";

export default function National() {
  const [scholardata, setScholarData] = React.useState([]);
  const [country, setCountry] = useState();
  const [income, setIncome] = useState("");
  const [degree, setDegree] = useState("");


  const onSelected = () => {
    if(country || degree){
      if(country){
        let url = `https://scholarpad.herokuapp.com/api/v1/filter/international?country=${country}`
        axios.get(url)
        .then((res) =>{
          console.log(res)
          setScholarData(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
      }
      else{
        let url= `https://scholarpad.herokuapp.com/api/v1/filter/international?graduate=${degree}`
        axios.get(url)
        .then((res) => {
          console.log(res);
          setScholarData(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    }
    else if(country && degree){
      let url = `https://scholarpad.herokuapp.com/api/v1/filter/international?country=${country}&graduate=${degree}`
      axios.get(url)
        .then((res) => {
          console.log(res);
          setScholarData(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }
    else{
      getScholarship();
    }
  }


  function Star(item) {
    console.log(item);
    let token = localStorage.getItem("token");
    const data = {
      "accessToken": token,
    };
    console.log(data);
    axios
      .patch(
        `https://scholarpad.herokuapp.com/api/v1/list/international/${item}`,
        data
      )
      .then((res) => {
        console.log("Data saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getScholarship = () => {
    let url = "https://scholarpad.herokuapp.com/api/v1/international";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setScholarData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    onSelected();
  }, [country, degree]);

  return (
    <div className="national1">
      <Navbar />
      <h2 id="heading">International Scholarships</h2>
      <div className="dropdowns">
        <h4>Sort BY:</h4>

        <div className="inputCandidate">
          <FormControl fullWidth size="small">
            {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
            <Select
              className="textField"
              style={{  width: "300px" , marginRight :"30%"}}
              sx={{ width: { sm: 200, md: 210 } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country || ""}
              autoComplete="off"
              required
              placeholder="Country"
              variant="outlined"
              size="small"
              label="Gender"
              onChange={(e) => setCountry(e.target.value)}
              // onBlur={handleFocusGender}
              // focused={focused.toString()}
            >
              {/* <MenuItem selected defaultChecked value={"Country"}>
                Country
              </MenuItem> */}
              <MenuItem value={"Australia"}>Australia</MenuItem>
              <MenuItem value={"UK"}>UK</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="inputCandidate">
          <FormControl fullWidth size="small">
            {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
            <Select
              className="textField"
              style={{  width: "300px" }}
              // sx={{ width: { sm: 200, md: 210 } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={degree || ""}
              autoComplete="off"
              required
              placeholder="Gender"
              variant="outlined"
              size="small"
              label="Education"
              onChange={(e) => setDegree(e.target.value)}
              // onBlur={handleFocusGender}
              // focused={focused.toString()}
            >
              {/* <MenuItem selected value={"Education"}>
                Education
              </MenuItem> */}
              <MenuItem value={"undergraduate"}>UnderGraduate</MenuItem>
              <MenuItem value={"postgraduate"}>PostGraduate</MenuItem>
              {/* <MenuItem value={"Other"}>Other</MenuItem> */}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="expcard">
        {scholardata.map((item) => {
          return (
            <Card
            key={item._id}
              sx={{ maxWidth: 345 }}
              className="cardinside"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <CardHeader title={item.name} />

              <CardContent>
                <Typography paragraph>
                  <h5>Description :</h5>
                </Typography>
                <Typography paragraph>{item.description}</Typography>
                <Typography paragraph>
                  <h5>Last Date:</h5>
                </Typography>
                <Typography paragraph>{item.lastDate}</Typography>
                <div className="applydiv">
                  <a href={item.applyUrl} style={{ textDecoration: "none" }}>
                    <Button variant="contained" className="apply">
                      Apply
                    </Button>
                  </a>
                  <button onClick={() => Star(item._id)}>
                    <StarBorderIcon />
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
