
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./AssetsSend.css"
import { getLocalObj } from "../helpers/helpers"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const AssetsSend = () => {

  let walletAddress = localStorage.getItem('address')
  let walletPrivateKey = localStorage.getItem('privateKey')
  let contractAddress = localStorage.getItem('contractAddress')
  let contractAsset = localStorage.getItem('contractAsset')
    // walletAddress= walletAddress.toString()
  // walletPrivateKey = walletPrivateKey.toString()

  const [recipientaddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [hash, sethassh] = useState('')
  const [validationError, setValidationError] = useState('')
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false);
  console.log("value from previous page")
  let href = window.location.href
  let assetName = (href.split('=')[1])
  console.log("assetName kkkkkkkkkkkkkkkkkkkkkk", assetName, recipientaddress, amount)
  const handleNextButton = () => {
    alert("Congratulation")
  }
  let apiUrl = `http://64.227.175.219:8005/`



  const sendTrx = async () => {
    let obj = { chainId: 56 }
    obj = getLocalObj("currentNetwork")
    console.log(obj)
    setOpen(false);
    await fetch(`${apiUrl}sign-trx?asset=${assetName}&withdrawalAddress=${recipientaddress}&withdrawalAmount=${amount}&userAddress=${walletAddress}&privateKey=${walletPrivateKey}&chainId=${obj.chainId}`)
      .then((result) => {
        console.log('resulttt dsdsdsdsdsdsdsdsdsdsdsdsdd', result)
        result.json().then((resp) => {
          console.log("data", resp);
          if (resp.status == 'ok') {
            console.log("response is ok", resp);
            document.getElementById('messagegreen').innerHTML = resp.message
            sethassh(resp.result)
        
          }
        })
      })

  }

  const contractValidated = (e) => {
    console.log(e)
    let validated = /^0x[a-fA-F0-9]{40}$/.test(e.target.value)
    console.log(validated)
    if (!validated) {
      setValidationError('The  Address is not valid.')
    }
    else {
      setValidationError('')
      setRecipientAddress(e.target.value)
    }
    return validated
  }
  return (
    <div>
      <div className="Send-Compon">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-12 col-md-8">

              <Link to="/TestPage">
                <i id="content-icon-01" className="fas fa-arrow-left Send-Icon "></i> </Link>
            </div>
            <div className="col-lg-4 col-12 col-md-4">


              <input type="text" className="form-control pull-right" placeholder="Search " />

            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          <div className="col-lg-6 mx-auto py-4 card">

            <h3>Send</h3>
            <div className="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label">Address :</label>
              <div className="col-sm-10">
                <input type="text" class="form-control py-3" onChange={e => contractValidated(e)} />
                <span>{validationError}</span>
              </div>
            </div>
            <div className="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label">Asset:</label>
              <div className="col-sm-10">
                <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={assetName} />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label">Amount:</label>
              <div className="col-sm-10">
                <input type="number" className="form-control  py-3" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="0" />
              </div>
            </div>
            <p id='messagegreen'></p>
            <p>{hash ? <> Transaction hash is : {hash}</> : <></>}</p>

            <div className="lastButtons">


              <Button variant="primary" className="two-Button" onClick={onOpenModal} >
                Send Transaction
              </Button>

            </div>
          </div>

        </div>

        {/* <div className="row">
          <div className="col-lg-6 col-12 col-md-6 mx-auto">
            <h1>Send</h1>
            <div className="RecipientAdd">
              <div className="Scaner-Input">
                <input value={recipientaddress} onChange={(e) => setRecipientAddress(e.target.value)} id="recipientaddress"
                  className="Recipient-Input"
                /></div>
            </div>


            <div className="assetsContainer">
              <div className="Recipient-Add">
                <label className="amountLabelStyle">Asset:</label>
                <div className="borderContainer">

                  <div className="innerContainer">
                    <label className="labelStyle">{assetName}</label>

                  </div>
                </div>
              </div>
            </div>
            <div className="assetsContainer">
              <div className="Recipient-Add">
                <label className="amountLabelStyle">Amount:</label>
                <div className="amountContainer">
                  <div class="unit-input__inputs">
                    <div class="unit-input__input-container">
                      <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" class="unit-input__input" placeholder="0"></input>
                      <div class="unit-input__suffix">{assetName}</div>
                    </div>
                    <div class="currency-input__conversion-component">No Conversion Rate Available</div>
                  </div>

                </div>


              </div>
            </div>

            <div className="lastButtons">
              <p id='message'> </p>
              <Button variant="primary" className="two-Button" onClick={sendTrx} >
                Next
              </Button>

            </div>
          </div>
        </div> */}

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className='startto_box_modal startto_box_modal_kyc'>
            <p>  Are you sure you want to send this transaction?</p>
            <Button variant="primary" className="two-Button" onClick={sendTrx} >
              Confirm Transaction
            </Button>
          </div>

        </Modal>

      </div>
    </div>
  );
};
export default AssetsSend;

