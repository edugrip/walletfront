
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Header from '../Six-Folder/Header'
// import { signTransaction } from "../backend/signTrx";
// import "./Navigat.css";
import {getApi, postApi, getCurrentChainId} from '../helpers/helpers'
import "./AssetsSend.css"

const AddAssestname = () => {
  let apiUrl = `https://143.110.250.238:8000/`
 // let walletAddress = localStorage.getItem('address')


  const [networkname, setNetworkname] = useState('')
  const [rpculr, setRpculr] = useState('')
  const [chainid, setChainid] =useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [validationError, setValidationError] = useState('')
  const [result, setResult] = useState('')
  const [userAddress, setWalletAddress] = useState(localStorage.getItem("address"))

  

const  contractValidated = (address) => {
  console.log(address)
  let validated =   /^0x[a-fA-F0-9]{40}$/.test(address)
  console.log(validated)
  if (!validated) {
    setValidationError('The Contract Address is not valid.')
  }
  else{
    setValidationError('')

  }
  return validated
}
const  addAndGetAssets = async (contractAddress) => {
  let assets = await addAsset(contractAddress)
}

const addAsset = async () =>{
  let chainId = await getCurrentChainId();
  console.log('Chain Id in add asset',chainId)
  let assets = (contractValidated) ? await getApi('add-asset', { contractAddress, chainId, userAddress}) :[]
  console.log("assets in add AssetsName", assets)
  setResult(assets);
  localStorage.setItem(assets)
  return assets
}
  return (
    <div>

      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto py-4">
            <h3> Add Assets</h3>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-form-label">ContractAddress :</label>
               <div class="col-sm-12">
                 <input type="text" class="form-control py-3"  onChange={(e) => { contractValidated(e.target.value); return setContractAddress(e.target.value)}}  id="networkname" placeholder="Please enter valid contract address. "/>
                <span>{validationError}</span>
              </div>
            </div>
  
         <p>{result.message}</p>
      

            <div className="">
              
              <Button variant="primary" className="two-Button" onClick={addAsset}>
                Add Assets
              </Button>
       
            </div>
          </div>

        </div>
     </div>
    </div>
  );
};
export default AddAssestname;

