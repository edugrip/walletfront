
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import validator from 'validator'
import "../../assets/Confirm-Password.css";
let apiUrl = `https://backend.trodex.io/`
// http://64.227.172.81:8000/password?password=aniket&cPassword=aniket


export const ConfirmPassword = () => {
  const [errorMessage, setErrorMessage] = useState({ error: false, message: '' })
  const [password, setPassword] = useState('')
  const [passwordc, setPasswordc] = useState('')
  const [termsCondnChecked, settermsCondn] = useState(false)

  let history = useNavigate();
  const Buttton = () => {
    history("/Password")
    //  signUp("hi")
  }

  useEffect(() => {
    if (!errorMessage.error) {
      if (password != passwordc) {
        console.log("not matching ")
        setErrorMessage({ error: 1, message: 'Passwords do not match!' })
      }
    }
    else {
      if (password == passwordc) {
        console.log(" matching ")
        setErrorMessage({ error: false, message: '' })
      }
    }
    
  }, [password, passwordc])



  const validate = (event) => {
    let target = event.target
    if (target.name == 'password') {
      setPassword(target.value)
      if (validator.isStrongPassword(target.value, {
        minLength: 8,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage({ error: false, message: '' })
      } else {
        setErrorMessage({ error: 1, message: 'Weak Password.' })
        return
      }
    }
    else {
      setPasswordc(target.value)
    }

  }
  const agreeTermsCond = (event) => {
    let target = event.target
    settermsCondn(event.target.checked);
    
  }
  

  const signUpFun = async () => {
    console.log('password and confirm password ', password, passwordc)
    let isinvalidPass = false;
    await fetch(`${apiUrl}password?password=${password}&cPassword=${passwordc}`)
      .then((result) => {
        result.json().then((resp) => {
          console.log("login", resp);
          if (resp.status == 'ok') {
            if(termsCondnChecked){
              localStorage.setItem("password", resp.result.password);
              localStorage.setItem("mnemonic", resp.result.mnemonic);
              window.location.href = ("/account")
            }
          } else {
            //document.getElementById('message').innerHTML = resp.message
            isinvalidPass = true;
          }
          if(isinvalidPass){
            document.getElementById('message').innerHTML = resp.message
          } else if (!termsCondnChecked) {
            document.getElementById('message').innerHTML = "Please agree the terms & conditions";
          } else {
            document.getElementById('message').innerHTML = "";
          }

        })
      })
      .catch(error => {
        alert(error.message)
      })

  }
  return (
    <div className="Main-Password-Container password_Cont">
      <div style = {{marginTop: "17px",width:"95%"}}> 
        <div className="pass_logo"> 
          <img src="./Images/trodex7.png" className='brandName'alt="RandomImage" />
        </div>

        <div className="form_body">
          <div className="create_pass">Create Password</div>
          <p className="mt-1" style= {{width:"80%", fontSize: "18px" , color: "rgb(35 44 51 / 78%)"}}>The decentralized web awaits</p>
  
          <div className="row pass_section">
            <div className="input-group" style={{flex: "1" , display:"flex", flexDirection:"column"}}>
              <label>New password(8 characters min)</label>
              <input type="password" name="password" placholder="Enter your password" className = "pass_input" onChange={(e) => validate(e)}></input>  
            </div>

            <div className="input-group" style={{flex: "1" , display:"flex", flexDirection:"column" , marginTop:"-2px"}}>
              <label>Confirm password</label>
              <input type="password" name="passwordc" placholder="Enter your confirm password" className = "pass_input" onChange={(e) => validate(e)}></input> 
             </div>
          </div>
  
          <div className="input-group" style = {{fontSize: "18px", marginTop: "4px", color: "rgb(35 44 51 / 78%)"}}>
            <div style={{display: "flex"}}>
              <div style={{flex: "1", marginTop:"4px", width:"80%"}}>
                <label>
                  <input type="checkbox" name="Accept Term" id="Term" style={{height: "15px", width: "19px"}} onChange={(e) => agreeTermsCond(e)}></input>
                  <span style={{display: "inline"}}>I have read &amp; agree to the </span> 
                  <p  style={{display: "inline", color:"orange"}}>Terms of Use</p>
                </label>
              </div>
            </div>
          </div>
          <div style={{width:"80%"}}>
            <div id="message" className="err-msg"></div>
          </div>
          <div className="form-footer">
            <button className="create_btn"  onClick={signUpFun}> Create </button>
          </div>
        </div>

     </div>
      
    </div>
  );
};
export default ConfirmPassword;