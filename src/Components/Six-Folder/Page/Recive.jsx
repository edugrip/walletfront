import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Receive.css";
import Header from '../Header'
import TableCoin from "../Api-folder/TableCoin";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from "react-qr-code";
import crypto from 'crypto-js'
import atob from 'atob'

const Recive = () => {
  let walletAddress = localStorage.getItem('address')
  let userAddresss = atob(walletAddress)
  let userAddress = walletAddress
  console.log('wallet address hashed', userAddresss)
  let cryptoAddress = crypto.AES.decrypt(userAddresss, 'secret').toString(crypto.enc.Utf8);
  console.log('crypto address', cryptoAddress)
  let fromAddress = (JSON.parse(cryptoAddress)).address
  console.log('from address ', fromAddress)


  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")
  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100")
    console.log(res.data)
    setCoins(res.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (<div>
    <Header />
    <div className="container">
      <div className="row">
        {/* <input type="text" placeholder="Search a Coin" className="form-control text-dark border-3 mt-4 text-center"
      onChange={e => setSearch(e.target.value)}
    /> */}
        {/* <TableCoin coins={coins} search={search}/> */}
      </div>
      <div>
        {/* ------------Mayur QR Code------------ */}
        <div className="qrContainer">
          <div className="qr-box">
            <QRCode value={fromAddress} />
            <p className="addStyle">
              {fromAddress}
            </p>
          </div>
        </div>
        <div className="qrdivContainer">
          <CopyToClipboard text={fromAddress}>
            <button className="copybutton"><i class="fa fa-clone" aria-hidden="true"></i></button>
          </CopyToClipboard>
          <button className="copybutton"><i class="fa fa-share-alt" aria-hidden="true"></i></button>
        </div>
      </div>
    </div></div>
  );
};
export default Recive;
