import React, { useEffect } from "react";
import "./National.css";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import statedata from "../statedata";

export default function National() {
  const [scholardata, setScholarData] = React.useState([]);
  const [income, setIncome] = useState("");
  const [graduate, setGraduate] = useState("");
  const [category, setCategory] = useState("");
  const [stateArray, setStateArray] = useState([]);
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const onSelected = () => {
    if (income || graduate || category) {
      if (income) {
        let url = `https://scholarpad.herokuapp.com/api/v1/filter/national?income=${income}`;
        axios
          .get(url)
          .then((res) => {
            console.log(res);
            setScholarData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else if(graduate) {
        let url = `https://scholarpad.herokuapp.com/api/v1/filter/national?graduate=${graduate}`;
        axios
          .get(url)
          .then((res) => {
            console.log(res);
            setScholarData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else if(category){
        let url = `https://scholarpad.herokuapp.com/api/v1/filter/national?category=${category}`;
        axios
          .get(url)
          .then((res) => {
            console.log(res);
            setScholarData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
     else if (income && graduate && category) {
      let url = `https://scholarpad.herokuapp.com/api/v1/filter/national?income=${income}&graduate=${graduate}&category=${category}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setScholarData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getScholarship();
    }
  };

  function Star(item) {
    console.log(item);
    let token = localStorage.getItem("token");
    const data = {
      accessToken: token,
    };
    console.log(data);
    axios
      .patch(
        `https://scholarpad.herokuapp.com/api/v1/list/national/${item}`,
        data
      )
      .then((res) => {
        console.log("Data saved");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getState = () => {
    axios
      .get("https://scholarpad.herokuapp.com/api/v1/state")
      .then((res) => {
        console.log(res.data);
        setStateArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getScholarship = () => {
    let url = "https://scholarpad.herokuapp.com/api/v1/national";
    axios
      .get(url)
      .then((res) => {
        setScholarData(res.data);
        // console.log(data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    onSelected();
  }, [income, graduate, category]);

  return (
    <div className="national1">
      <Navbar />
      <h2 id="heading">National Scholarships</h2>
      <div className="dropdowns">
        <h4>Sort BY:</h4>
        <div className="inputCandidate">
          <FormControl fullWidth size="small">
            {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
            <Select
              className="textField"
              style={{ width: "300px", marginRight: "30%" }}
              sx={{ width: { sm: 200, md: 210 } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={income || ""}
              autoComplete="off"
              required
              placeholder="Country"
              variant="outlined"
              size="small"
              label="Income"
              onChange={(e) => setIncome(e.target.value)}
              // onBlur={handleFocusGender}
              // focused={focused.toString()}
            >
              {/* <MenuItem selected defaultChecked value={"Country"}>
                Country
              </MenuItem> */}
              <MenuItem value={"Less than 3 lakh "}>Less than 3 Lakhs</MenuItem>
              <MenuItem value={"Less than 6 lakh"}>Less than 6 Lakhs</MenuItem>
              <MenuItem value={"Less than 10 lakh"}>
                Less than 10 Lakhs
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="inputCandidate">
          <FormControl fullWidth size="small">
            {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
            <Select
              className="textField"
              style={{ width: "300px" }}
              // sx={{ width: { sm: 200, md: 210 } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={graduate || ""}
              autoComplete="off"
              required
              placeholder="Graduate"
              variant="outlined"
              size="small"
              label="Education"
              onChange={(e) => setGraduate(e.target.value)}
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
        <div className="inputCandidate">
          <FormControl fullWidth size="small">
            {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
            <Select
              className="textField"
              style={{ width: "300px" }}
              // sx={{ width: { sm: 200, md: 210 } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category || ""}
              autoComplete="off"
              required
              placeholder="Category"
              variant="outlined"
              size="small"
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
              // onBlur={handleFocusGender}
              // focused={focused.toString()}
            >
              {/* <MenuItem selected value={"Education"}>
                Education
              </MenuItem> */}
              <MenuItem value={"AICTE"}>AICTE</MenuItem>
              <MenuItem value={"UGC"}>UGC</MenuItem>
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
                  <h4>Description :</h4>
                </Typography>
                <Typography paragraph>{item.description}</Typography>
                <Typography paragraph>
                  <h4>Last Date:</h4>
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
