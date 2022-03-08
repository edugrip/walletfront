import React, { useRef, useState, useEffect } from "react";
import "./MultiCoin.css";
import networks from '../helpers/networks.js'
import { setLocalObj, getApi, getLocalObj } from "../helpers/helpers";
const EthereumMainnet = () => {

  const [networkList, setNetworkList] = useState('')
   // setNetworkList(networks)
    console.log("networks value" , networkList)
    const selectCurrency = async (e) => {
    let chainValue = e.target.value
    console.log("chainValue -------- ccccccccccccccccccc", chainValue);
   }

  const networkChanged = (target)=>{
    let currentNetwork = JSON.parse(target.getAttribute('data-items'))
    setLocalObj('currentNetwork', currentNetwork)
  }
  const getNetworks = async ()=>{
    let networks = await getApi('get-network', {userAddresss:getLocalObj('walletAddress')})
  }
  return (
    <>
    <div class="dropdown">
      <div className="assetsNmaes">
        <span>Ethereum Mainnet</span>
      </div>
      <div class="dropdown-content assetsNmaes_derp" id="depositName" name="depositName" onChange={selectCurrency}>
        {networks.map((value, index) => {
          console.log("asdf", index, value);
          return <a data-items={JSON.stringify(value)} onClick= {(e)=> networkChanged(e.target)} value={value.networkName}> {value.networkName}</a>
        })}
      </div>
    </div>
    </>
  );
};
export default EthereumMainnet;
