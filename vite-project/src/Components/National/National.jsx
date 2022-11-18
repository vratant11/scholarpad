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

export default function National() {
  const [data, setData] = React.useState([]);
  const url = "https://scholarpad.herokuapp.com/api/v1/national";
  const getScholarship = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
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
        {data.map((item) => {
          return (
            <Card
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
                  <Button variant="contained" className="apply">
                    Apply
                  </Button>
                  <StarBorderIcon />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
