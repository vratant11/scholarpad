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


export default function National() {
  const [scholardata, setScholarData] = React.useState([]);
  const navigate = useNavigate();

  const url = "https://scholarpad.herokuapp.com/api/v1/national";
  function Star(item)  {
    console.log(item);
    let token = localStorage.getItem("token");
    const data = {
      "accessToken": token,      
    }
    console.log(data);
    axios.patch(`https://scholarpad.herokuapp.com/api/v1/list/national/${item}`,data)
    .then((res) => {
     console.log(res.data);
     window.alert("Succesfully added to your list");
    })
    .catch((err)=>{
      console.log(err);
    })
  };
 
  const getScholarship = () => {
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
    getScholarship();

  }, []);

  return (
    <div className="national1">
      <Navbar />
      <h2 id="heading">National Scholarships</h2>
      <div className="dropdowns">
        <h4>Sort BY:</h4>
        <div className="dropdown ">
          <button
            className="btn btn-secondary dropdown-toggle selectbtn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Recent
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Latest
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Older
              </a>
            </li>
           
          </ul>
        </div>
        <div className="dropdown ">
          <button
            className="btn btn-secondary dropdown-toggle selectbtn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Income
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Less than 3 lakh
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Less than 6 lakh
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Less than 10 lakh
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Not applicable
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown ">
          <button
            className="btn btn-secondary dropdown-toggle selectbtn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Education
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
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
                  <a href={item.applyUrl} style={{textDecoration:"none"}}>
                  <Button variant="contained" className="apply" >
                    Apply
                  </Button>
                  </a>
                 
                  <button onClick={() => Star(item._id)}>

                  <StarBorderIcon  />
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
