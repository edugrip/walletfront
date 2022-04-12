
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import validator from 'validator'
import "./Confirm-Password.css";
let apiUrl = `https://143.110.250.238:8000/`
// http://64.227.172.81:8000/password?password=aniket&cPassword=aniket


export const ConfirmPassword = () => {
  const [errorMessage, setErrorMessage] = useState({ error: false, message: '' })
  const [password, setPassword] = useState('')
  const [passwordc, setPasswordc] = useState('')

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

  const signUpFun = async () => {
    console.log('password and confirm password ', password, passwordc)
    await fetch(`${apiUrl}password?password=${password}&cPassword=${passwordc}`)
      .then((result) => {
        result.json().then((resp) => {
          console.log("login", resp);
          if (resp.status == 'ok') {
            localStorage.setItem("password", resp.result.password);
            localStorage.setItem("mnemonic", resp.result.mnemonic);
            window.location.href = ("/account")
          } else {
            document.getElementById('message').innerHTML = resp.message
          }

        })
      })
      .catch(error => {
        alert(error.message)
      })

  }
  return (
    <div className="Main-Password-Container">
      <div className="Header">
        <div className="col-lg-12 text-center">
          <img src="./Images/trodex7.png" className='brandName'alt="RandomImage" />
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-md-5 mx-auto">
            <div class="myforms form ">
              <div class="col-md-12 text-center">
                <img src='../../Images/logo-icon1.png' className='logo_img' alt='logo' width={360} height={50}></img>
              </div>
              <div className="Border-Bottom mx-auto"></div>
              <p className="text-center mt-1">The decentralized web awaits</p>
              <div class="awaits_css m-0">
                <i className="fa fa-lock"></i>
                <input type="password" name="password" className="form-control" placeholder="Enter your password" onChange={(e) => validate(e)}></input>
              </div>

              <div class=" awaits_css m-0">
                <i className="fa fa-lock "></i>
                <input type="password" name="passwordc" className="form-control" placeholder="Enter your confirm password" onChange={(e) => validate(e)}></input> 
              </div>

              <p id="message"></p>
              <div className="text-center mx-auto">
              <Button variant="primary" className="btn btn-primary text-center" onClick={signUpFun} >
                SignUp
              </Button>
              </div>
            </div> </div>
        </div>
      </div>





      {/* <div className="bootstrap">
        <Card className="Container1">
          <Card.Img
            variant="top"
            src="./images/logo-icon1.png"
            className="Image-side"
          />
          <Card.Body>
            <div className="Border-Bottom"></div>
            <Card.Text className="Text">The decentralized web awaits</Card.Text>

            <div className="Password-Container">
              <pre>
                <i className="fa fa-lock Lock-Icon"></i>
                <input type="text"
                  name="password"
                  className="Password"
                  placeholder="Enter your password"

                  onChange={(e) => validate(e)}></input> <br />
              </pre>
            </div>
            <div className="Password-Container">
              <pre>
                <i className="fa fa-lock Lock-Icon"></i>
                <input type="text"
                  name="passwordc"
                  className="Password"
                  placeholder="Enter your confirm password"

                  onChange={(e) => validate(e)}></input> <br />
              </pre>
            </div>
            <p id="message"> </p>
            <Button variant="primary" className="Bubbton" onClick={signUpFun} >
              SignUp
            </Button>
            <div>
              <p className="One">
                <Link to="/AssetsSendimport">import using Secret Recovery</Link>
              </p>

              <p className="Three">
                <span className="Span">Need help?</span>Contact Trodex Wallet
                Support
              </p>
            </div>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
};
export default ConfirmPassword;