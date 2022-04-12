import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import {bcrypt} from 'bcryptjs'
import { Link } from "react-router-dom"
import atob from 'atob'
import crypto from 'crypto-js'
import { getApi, postApi } from '../helpers/helpers'
import './Index.css'
const Index = () => {
    const [mypassword, setMypassword] = useState('')

    const checkPass = async () => {

        let password = localStorage.getItem("password")
        console.log("password", password)
        if (password) {
            let userPassword = atob(password)
            let cryptoPassword = crypto.AES.decrypt(userPassword, 'secret').toString(crypto.enc.Utf8);
            cryptoPassword = (JSON.parse(cryptoPassword)).userPassword
            if (cryptoPassword == mypassword) {
                console.log('hello ')
                let walletAddress = localStorage.getItem('address')
                let walletPrivateKey = localStorage.getItem('privateKey')
                if (walletAddress && walletPrivateKey) {
                    console.log('walletPrivateKey ')
                    window.location.href = ("/TestPage")
                } else {
                    console.log('walletPrivateKeywalletPrivateKeywalletPrivateKey ')
                    window.location.href = ("/account")
                }

                // window.location.href = ("/TestPage")
            } else {
                console.log('Incorrect Password')
                document.getElementById('message').innerHTML = 'Invalid Credentials.'
            }
        } else {
            console.log('Please Create New Wallet First.')
            document.getElementById('message').innerHTML = 'Please Create New Wallet First.'
        }
    }
    const getNetworks = async () => {
        getApi('')
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-5 mx-auto">
                    <div class="myform form">
                        <div id="first">
                            <div class="logo mb-3">
                                <div class="col-md-12 text-center">
                                    <img src='../../Images/logo-icon1.png' className='logo_img' alt='logo' width={380} height={50}></img>
                                </div>
                                <div class="col-md-12 text-center">
                                    <h3>Welcome Back!</h3>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" name="password" className="form-control mt-2 border border-2" value={mypassword} onChange={(e) => setMypassword(e.target.value)} placeholder="Enter your password" ></input>
                                <p id='message'></p>
                            </div>

                            <div className="form-group mx-auto text-center">
                                <Button className='btn btn-primary' onClick={checkPass}>Unlock</Button>
                                {/* <Link className='btn btn-primary m-2' onClick={checkPass}>Unlock</Link> */}
                            </div>

                            <div class="col-md-12 ">
                                <div class="login-or">
                                    <hr class="hr-or" />
                                    <span class="span-or">or</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mx-auto text-center">                            
                            <a href="/AssetsSendimport" className='foot-link'>Import Wallet</a>
                            <a href="/ConfirmPassword" className='foot-link'>Create new Wallet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Index;