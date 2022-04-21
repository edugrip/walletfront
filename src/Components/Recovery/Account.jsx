import { getActiveElement } from "formik";
import React from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Six-Folder/Header";
//import "./Account.css"
import "../../assets/Account.css";
import "../../assets/Confirm-Password.css";


const Account = () => {
  let history = useNavigate();
  const ButtonTow = () => {
    history("/ending")
  }
  let mnemonic = localStorage.getItem('mnemonic');
  return (
    <div className="Main-Password-Container password_Cont">
        <div className="Wallet-Recovery-div">
              <div className="Recovery_logo">
                <img src="./Images/trodex7.png" className="brandName" alt="RandomImage"/> 
              </div>
              <div className="Recovery_body" >
                  <div className="Secret_Phrase">Secret Recovery Phrase</div>
                  <p className="Recovery_phraseCont mt-1" >Your Secret Recovery Phrase makes it easy to back up and restore your account.</p>
                  <p className="Phrase_Warning">WARNINGS: Never disclose your Secret Recovery Phrase. Anyone with this Phrase can take your Ether forever.</p>
                  <p className="Secret-Content">primary glad obey wisdom sadness veteran correct salute lucky better pretty jacket</p>
                  <p class="Final_RecoveryCont">Save this recovery phrase as it will help you when password is forgotten.</p>
                  <div class="recovery-footer"><button class="create_btn">Next</button></div>
              </div>
        </div>
    </div>
  );
};
export default Account;
