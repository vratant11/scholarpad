import React, { useEffect } from "react";
import "./List.css";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Delete } from "react-axios";


export default function National() {
  const [scholardata, setScholarData] = React.useState([]);
  const navigate = useNavigate();

  const url = "https://scholarpad.herokuapp.com/api/v1/mylist";
const Delete = (item) => {
    const token = localStorage.getItem("token");
    console.log(item);
    const data1 = {
        "accessToken": token,
    }
    axios
      .delete(`https://scholarpad.herokuapp.com/api/v1/mylist/${item}`,data1)
      .then((res) => {
        console.log(res.data);      
      })
      .catch((err) => {
        console.log(err);
      });

}
 
  const getScholarship = () => {
    const token = localStorage.getItem("token");
    const data = {
        "accessToken": token,      
      }
    axios
      .post(url,data)
      .then((res) => {
        setScholarData(res.data);
        console.log(res.data);
      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getScholarship();
    
  }, []);

  return (
    <>
    
      <Navbar />
    <div className="main_list">
      <h2 id="heading">My List :</h2>
      
      <div className="list">
        {scholardata.map((item) => {
          return (
           <div key ={item._id} className="innerlist">
            <h3>{item.name}</h3>
            <h6 className="dateandicon">Last Date:{item.lastDate}  <button onClick={()=>Delete(item._id)}>              
              <DeleteIcon />
              </button> 
              </h6>             
           </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
