import React, { useRef, useState, useEffect } from "react";
import "./MultiCoin.css";
import { Link } from "react-router-dom";
import networks from '../helpers/networks.js'
import { setLocalObj, getApi, getLocalObj } from "../helpers/helpers";


const EthereumMainnet = () => {
  let walletAddress = localStorage.getItem('address')
  let currentNetwork = localStorage.getItem('currentNetwork')

  console.log('wallet address hashed', walletAddress)
  const [networkList, setNetworkList] = useState('')
  const [network, setNetwork] = useState(networks[0])
  const [allmnetworks, setAllnetwork] = useState('')
  let userAddress = localStorage.getItem('address')
  // setNetworkList(networks)
  console.log("networks value -----------------------------------15", networkList, userAddress , network)

console.log("allmnetworks-----------------------------18", allmnetworks)
 
  const selectCurrency = async (e) => {
    let chainValue = e.target.value
    console.log("chainValue -------- ccccccccccccccccccc", chainValue);
  }

  const networkChanged = (target) => {
    let currentNetwork = JSON.parse(target.getAttribute('data-items'))
    console.log("currentNetwork   localhost ddkdkddk", currentNetwork.networkName,currentNetwork.chainId)
    setNetwork(currentNetwork)
    console.log('Current Chain Id',currentNetwork.chainId)
    localStorage.setItem("currentChainId", currentNetwork.chainId);
    localStorage.setItem("currentNetwork", currentNetwork);
    setLocalObj('currentNetwork', currentNetwork)
  }
  const networkon = () => {
    let networkName = localStorage.getItem('currentNetwork')
    let currentNetwork = JSON.parse(networkName)
    
    console.log("currentNetwork ---------------------------------------  localhost", currentNetwork[0])
    setNetwork(currentNetwork)
    setLocalObj('currentNetwork  ', currentNetwork[0])
  }
  const getNetworks = async () => {
    let networksbackend = await getApi('get-network', { userAddress })
    console.log("networks from backend----------", networksbackend)
    // setNetwork(networksbackend.result)
    // setNetwork(networksbackend.result[0])
    setAllnetwork(networksbackend.result)
  }

  useEffect(async () => {
    await networkon()
    await getNetworks()

  }, [])

  const [Hidedrop,setHidedrop]=useState({display:"block"});
  setTimeout(()=>{ 
    function HideDropdown(){
      setHidedrop({display:"none"});
    } 
  },1000)

  // const HideDropdown=()=>{
  //   setTimeout(()=>{
  //     setHidedrop({display:"none"});
  //   },1000)
  // }
  return (
    <>
      <div className="Main-Header-Icons">
        <div className="container my-0 py-0">
          <div className="row">
            <div className="col-lg-8 col-2">

              <div className="Notification-Icon-Container">
                <Link to="/testpage"><i id="content-icon-01" className="fas fa-arrow-left Back-Arrow"></i> </Link>
                {/* <i className="material-icons Notification-Icon">notifications</i> */}
                {/* <img src="./images/trodex1.png" alt="" className="Photo" /> */}

              </div>
              <div>
                <Link to="/testpage"><img src='../Images/logo-icon1.png' className='logo_img' alt='logo' width={360} height={50}></img></Link>
              </div>


            </div>
            <div className="col-lg-3 col-8">
              <div class="dropdown">
                <div className="assetsNmaes" >
                  <span >{network ? <>{network.networkName} </> : <></>}</span>
                </div>

             
                <div class="dropdown-content assetsNmaes_derp" id="depositName" name="depositName" onChange={selectCurrency} >
                  {allmnetworks ? <>{allmnetworks.map((value, index) => {
                    console.log("asdf", index, value);
                    return <Link to="" data-items={JSON.stringify(value)} onClick={(e) => {networkChanged(e.target);}} value={value.networkName}> {value.networkName}</Link>
                  })}</> : null} 
                </div>
               
              </div>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EthereumMainnet;
