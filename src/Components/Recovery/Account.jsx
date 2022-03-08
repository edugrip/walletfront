import { getActiveElement } from "formik";
import React from "react";
import { Button, Card, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Six-Folder/Header";
import "./Account.css"
const Account = () => {
  let history = useNavigate();
  const ButtonTow = () => {
    history("/ending")
  }


  let mnemonic = localStorage.getItem('mnemonic');

  return (
  
   <div className="bgseed">
     <Header/>


      <div className="container">

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="card recovery_phrase">
              <h2>Secret Recovery Phrase</h2>
              <p className="Paragraph1">
                Your Secret Recovery Phrase makes it easy to back up and restore
                your account.
              </p>
              <p className="Paragraph2">
                WARNINGS: Never disclose your Secret Recovery Phrase. Anyone with
                this Phrase can take your Ether forever.
              </p>
              <p className="Last-Content">
                {mnemonic}
              </p>
              <p className="end-Content">
                Save this recovery phrase as it will help you when password is forgotten.
              </p>
              <div className="Last-Buttons">

                <Button variant="primary" className="Second-Button" onClick={() => ButtonTow()}>
                  Next
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
