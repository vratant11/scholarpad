import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Otp.css";
import axios from "axios"

const Otp = (accessToken) => {
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location.state.accessToken);
    localStorage.setItem("token",location.state.accessToken);

    // const getRegisterInfo = async() => {
    
    //     try{        
    //         let url= "localhost:3000/api/v1/signup/verify"
    //         let res= await fetch(url);
    //         let data = await res.json();
    //         //console.log(( data ).length);
    //         var a=data.length;
    //         const{otpuser} = data[(a-1)];
    //         const myotp = otpuser;
    //        // console.log(myotp);
    //         if(myotp === otp.join("") ){
    //             navigate("/home");
    //         }
    //         else{
    //             window.alert("invalid otp")
    //         }
    
    //     }catch(error){
    //         console.log(error);
    //     }
    
        
    // } 

    const submit = () => {
        const data  = {
            "accessToken" : location.state.accessToken,
            "otp" : +otp.join("")
        }
        console.log(data);
        axios
            .patch("https://scholarpad.herokuapp.com/api/v1/signup/verify", data)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    



    const [otp,setOtp]= useState(new Array(6).fill(""))
    
    const handleChange =(element,index) =>{
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d,idx)=>(idx === index) ? element.value : d)]);

        if(element.nextSibling){
            element.nextSibling.focus();
        }
        
    };
    
    
  return (<div className='container'>
      <div className='app-wrapper'>
      <h2 className='title'>OTP Verification</h2>
      
      <h3>Enter OTP received on your email  </h3>
      {/* <h3>registered email</h3> */}
      <div className='name'>
          {
              otp.map((data,index) =>{
                  return(
                    <input className='inputnum'
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}   
                    value={data}
                    onChange={e=>handleChange(e.target,index)}
                    onFocus={e=> e.target.select()}
                    />
                  );
              })}
              
        
          
          
      </div>
          <div id='forget'>
                      <Link to= "/otp" style={{textDecoration:"none"}}>Resend Otp?</Link>
                  </div>
    
      <button className='submit' onClick={submit}>Verify and Proceed</button>
      </div>
  </div>);
};

export default Otp;