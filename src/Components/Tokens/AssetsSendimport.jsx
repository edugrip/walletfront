
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Header from '../Six-Folder/Header'
// import { signTransaction } from "../backend/signTrx";
// import "./Navigat.css";
import "./AssetsSend.css"

const AssetsSendimport = () => {
  let apiUrl = `https://143.110.250.238:8000/`
  let walletAddress = localStorage.getItem('address')
  let walletPrivateKey = localStorage.getItem('privateKey')
  let contractAddress = localStorage.getItem('contractAddress')
  let contractAsset = localStorage.getItem('contractAsset')

  console.log('address and private key in assets send page', walletAddress, walletPrivateKey, contractAddress,contractAsset)
  // walletAddress= walletAddress.toString()
  // walletPrivateKey = walletPrivateKey.toString()

  const [password, setpassword] = useState('')
  const [amount, setAmount] = useState('')
  const [textarea , setTextarea ] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('')
  


  console.log("value from previous page")


  const importAccount = async () => {

    console.log("value", textarea,password ,confirmpassword)


    await fetch(`${apiUrl}import-wallet?seed=${textarea}&password=${password}&cPassword=${confirmpassword}`)
      .then((result) => {
        console.log('resulttt dsdsdsdsdsdsdsdsdsdsdsdsdd', result)
         result.json().then((resp) => {
          console.log("data", resp);
        if (resp.status == 'ok' ) {
            console.log("response is ok" ,resp);
            localStorage.setItem("password",password);
            localStorage.setItem("address", resp.result.address);
            localStorage.setItem("privateKey", resp.result.privateKey);
            localStorage.setItem("address", resp.result.address);
            localStorage.setItem("mnemonic", textarea);
            document.getElementById('messagegreen').innerHTML = resp.message
            window.location.href = 'TestPage';
           }else{
            document.getElementById('messagegreen').innerHTML = resp.message
           }
           
        })

      })
      
  }
  return (
    <div>
      {/* <Header/> */}
        <div className="container">
        <div className="row">

          <div className="col-lg-6 mx-auto py-4 ">

            <h3>Restore your Account with Secret Recovery Phrase</h3>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-form-label First-Label">Wallet Secret Recovery Phrase:</label>
               <div class="col-sm-12">
                <textarea type="text" class="form-control py-3" value={textarea} onChange={(e) => setTextarea(e.target.value)} id="amount" placeholder="" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="staticEmail" class=" col-form-label Second-Label">New password (min 8 chars) :</label>
              <div class="col-sm-12">
                <input type="password" class="form-control py-3" value={password} onChange={(e) => setpassword(e.target.value)} />
              </div>
            </div>
            {/* <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Asset:</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext"  id="staticEmail" value={assetName}/>
              </div>
            </div> */}
            <div class="mb-3 row">
              <label for="staticEmail" class=" col-form-label Third-Label">Confirm password:</label>
               <div class="col-sm-12">
                <input type="password" class="form-control  py-3" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} id="amount" placeholder="" />
              </div>
            </div>

            
            <p id='messagegreen'></p>
      

            <div className="">
              
              <Button variant="primary" className="two-Button" onClick={importAccount}>
                Import
              </Button>

            </div>
          </div>

        </div>
     </div>
    </div>
  );
};
export default AssetsSendimport;

