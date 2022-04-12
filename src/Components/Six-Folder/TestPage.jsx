import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import TokensNft from "../Tokens/TokensNft";
import { useState } from "react";
import "./MultiCoin.css";
import { Modal, Button } from "react-bootstrap";
import { setNestedObjectValues } from "formik";
import crypto from 'crypto-js'
import atob from 'atob'
// import { networks } from '../helpers/helpers.js'
import Header from "./Header";

import { setLocalObj, getApi, getLocalObj, networks } from "../helpers/helpers";
function MyVerticallyCenteredModal(props) {
  return (
    // <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       New Account
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <div>
    //       {count.map((item) => {
    //         return <h6> {item}</h6>;
    //       })}
    //       {/* <p>Account{count}</p> */}
    //       </div>
    //       <div className='footbtn'>
    //       <Button
    //         class="primary"
    //         onClick={() => setCount([...count, `Account ${count.length}`])}
    //         className="Accountbutton"
    //       >
    //         Create New Account
    //       </Button>

    //       <Button className="AccountButton2">Import an Account</Button>
    //       </div>        
    //   </Modal.Body>{" "}
    //   <Modal.Footer style={{marginRight:"100px",width:"rem"}}>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
    <></>
  );
}
const TestPage = () => {
  const [loading, setLoarding] = useState(false)
  let walletAddress = localStorage.getItem('address')
  let userAddresss = atob(walletAddress)
  let userAddress = walletAddress
  console.log('wallet address hashed', userAddresss)
  let cryptoAddress = crypto.AES.decrypt(userAddresss, 'secret').toString(crypto.enc.Utf8);
  console.log('crypto address', cryptoAddress)
  let fromAddress = (JSON.parse(cryptoAddress)).address
  console.log('from address ', fromAddress)
  const [modalShow, setModalShow] = React.useState(true);
  const [dataasset, setDataAsset] = useState('')
  const [copySuccess, setCopySuccess] = useState('');
  let [assets, setAssets] = useState([])

  let [decimals, setdecimals] = useState('')
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };




  const getAssets = async () => {
    let assetsNames = await getApi('get-asset', { userAddress })
    console.log("get assets called", assetsNames)

    setAssets(assetsNames.result)
  }


  const removeAsset = async (event) => {
    let item = JSON.parse(event.target.value)
    let assetName = item.assetName
    let chainId = item.chainId
    let assetsNames = await getApi('remove-asset', { userAddress, assetName, chainId })
    setAssets(assetsNames.result)

  }

  const Updatebalance = async (event) => {
    let item = JSON.parse(event.target.value)
    let assetName = item.assetName
    let chainId = item.chainId
    let bals = assets.slice()
    for (let i = 0; i < bals.length; i++) {
      if (bals[i].assetName == item.assetName && bals[i].chainId == item.chainId) {
        let asset = bals[i];
        const item = await getApi('user-balance', { userAddress, assetName, chainId })
        bals[i].balance = item.result
      }
    }
    setAssets(bals)
  }

  useEffect(() => {
    getAssets()
  }, [])


  const sendAsset = async (event) => {
    let item = JSON.parse(event.target.value);
    let assetName = item.assetName;
    let chainId = item.chainId
    console.log('asset name and chain id for send asset ', assetName, chainId)
  }


  return (
    <>

      <div>

        <div className="Main-Icon-Container">
          <div className="Main-Header-Icons">
            <Header />


          </div>
          <div className="Link-Icons-Container text-center">
            {/* <h2 className="Icon-Header">$0.000</h2> */}
            <h2 className="Icon-Header">Multi-Coin Wallet 1</h2>

            <h3 className="Account1"> Main Account </h3>

            <p className="w-50 mx-auto"><input className="form-control-plaintext text-white text-center" ref={textAreaRef} value={fromAddress} /></p>
            <button className="Copy_btn" onClick={copyToClipboard}>Copy</button> </div>
          <div>


            <div className="Main-Icons">
              {/* <Link to="/AssetsSend" className="Send-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_upload
                </i>               
                  <b id="Content-icon-buy">Send</b>               
              </Link> */}
              {/* <Link target="_self" to="/AssetsSend" className="Swap-Icon">
                <i id="Content-icon-buy" class="fa fa-upload"></i>
                <br />
                <b id="Content-icon-buy">Send</b>
              </Link> */}

              {/* <Link to="/receive" className="Receive-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_download
                </i>
                <b id="Content-icon-buy">Receive</b>
              </Link> */}
              <Link target="_self" to="/receive" className="Swap-Icon">
                <i id="Content-icon-buy" class="fa fa-download"></i>
                <br />
                <b id="Content-icon-buy">Receive</b>
              </Link>

              <Link target="_self" to="/history" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">History</b>
              </Link>
              {/* <Link target="_self" to="/swap" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-exchange-alt"></i>
                <br />
                <b id="Content-icon-buy">Swap</b>
              </Link> */}
              <Link target="_self" to="/addtoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">Token</b>
              </Link>
              {/* <Link target="_self" to="/nftstoken" className="Swap-Icon">
                <i id="Content-icon-buy" class="fas fa-tag"></i>
                <br />
                <b id="Content-icon-buy">NFT </b>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-0 mt-0">
          <div class="table-responsive">
            <table className="table table-hover table-borderless">
              <thead>
                <tr>

                  <th>AssetName</th>
                  <th>Balance</th>
                  <th>Update Balance</th>
                  <th>Remove Asset</th>
                  <th>Send Asset</th>



                </tr>
              </thead>

              {assets ? <>{assets.map(item => (
                <tbody>
                  <tr>
                    <td><a href={"/AssetsSend?assetName=" + item.assetName}> {item.assetName}</a> </td>
                    <td>{item.balance}</td>
                    <td > <button className="button_remove" value={JSON.stringify(item)} onClick={(event) => Updatebalance(event)}>Refresh</button> </td>
                    <td><button className="button_remove" value={JSON.stringify(item)} onClick={(event) => removeAsset(event)}>Remove Asset from list </button></td>
                    <td><a href={"/AssetsSend?assetName=" + item.assetName}> Send</a> </td>

                    {/* <td><button className="btn btn_buynow update_bal" value={JSON.stringify(item)} onClick={(event) => sendAsset(event)}>Send</button> </td> */}
                    {/* <td><Link className="btn_buynow" to={{ pathname: "/Assethistory", state: { item } }}>View Details</Link> </td> */}


                  </tr>
                </tbody>
              ))}</> : <>No Assets to show.</>}

            </table>
          </div>


          <Link to="/AddAssestname" className='btn btn-primary mx-2 my-2'> Add Assets</Link>
        </div>
      </div>
      {/* <TokensNft /> */}
    </>
  );
};
export default TestPage;
