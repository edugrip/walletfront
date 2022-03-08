import React, { useRef, useState, useEffect } from "react";
import "./MultiCoin.css";
import { Link } from "react-router-dom";
import networks from '../helpers/networks.js'
import { setLocalObj, getApi, getLocalObj } from "../helpers/helpers";


const EthereumMainnet = () => {


  let walletAddress = localStorage.getItem('address')
  console.log('wallet address hashed', walletAddress)


  const [networkList, setNetworkList] = useState('')
  const [network , setNetwork] = useState(networks[0])
  let userAddress = localStorage.getItem('address')
  // setNetworkList(networks)
  console.log("networks value", networkList, userAddress)
  const selectCurrency = async (e) => {
    let chainValue = e.target.value
    console.log("chainValue -------- ccccccccccccccccccc", chainValue);
  }

  const networkChanged = (target) => {
    let currentNetwork = JSON.parse(target.getAttribute('data-items'))
    console.log("currentNetwork ddkdkddk", currentNetwork.networkName)
    setNetwork(currentNetwork)

    setLocalObj('currentNetwork', currentNetwork)
  }
  const getNetworks = async () => {
    let networksbackend = await getApi('get-network', {userAddress})
    console.log("networks from backend", networksbackend)
    setNetwork(networksbackend.result)
  }
 
  useEffect(() => {
    getNetworks()
}, [])

  return (
    
    <>

      <div className="Main-Header-Icons">

        <div className="container my-0 py-0">
          <div className="row">
            <div className="col-lg-8 col-2">
              <div className="Notification-Icon-Container">
                <i className="material-icons Notification-Icon">notifications</i>
              </div></div>
            <div className="col-lg-3 col-8"> 
              <div class="dropdown">
                <div className="assetsNmaes">
                  <span>{network ? <>{network.networkName} </> : <>  </> }</span>
                </div>
                <div class="dropdown-content assetsNmaes_derp" id="depositName" name="depositName" onChange={selectCurrency}>
                  {networks.map((value, index) => {
                    console.log("asdf", index, value);
                    return <Link to="" data-items={JSON.stringify(value)} onClick={(e) => networkChanged(e.target)} value={value.networkName}> {value.networkName}</Link>
                  })}
               
              </div>

              

            </div></div>
            <div className="col-lg-1 col-2 mx-auto ">
              <div class="dropdown">
                <div className="Setting-Icon-Container">
                  <i class="fas fa-sliders-h Setting-Icon"></i>
                </div>
                <div class="dropdown-content">
                  
                  <a href="/AssetsSendimport">Import Account</a>
                  <a href="/settings">Add Network</a>
                  <a href="/">LogOut</a>

                </div>
              </div></div>
          </div>
        </div>

        






      </div>







    </>
  );
};
export default EthereumMainnet;
