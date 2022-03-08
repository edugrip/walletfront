import React from "react";
import {useEffect,useState}from "react";
import axios from "axios";
import "./Receive.css";
import Header from '../Header'
import TableCoin from "../Api-folder/TableCoin";
import {CopyToClipboard}from 'react-copy-to-clipboard';
const Recive = () => {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState("")
  const getData=async()=>{
    const res=await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100")
    console.log(res.data)
    setCoins(res.data)
   }
   useEffect(()=>{
getData()
   },[])
  return (<div>
    <Header/>
    <div className="container">
    
    <div className="row">
    <input type="text" placeholder="Search a Coin" className="form-control text-dark border-3 mt-4 text-center"
      onChange={e => setSearch(e.target.value)}
    />
   
  {/* <TableCoin coins={coins} search={search}/> */}
 
  </div>
  
    <div>

      {/* ------------Mayur QR Code------------ */}
      <div className="qrContainer">
        <div className="qr-box">
          <img src="./Images/qrcode.png" alt="" height={150} width={150} />
          <p className="addStyle">
          0x0cC9fef6348D0F99D4e1004e4d5460e40E631fd5
          </p>
        </div>
       
       
      </div>
      <CopyToClipboard text="0x0cC9fef6348D0F99D4e1004e4d5460e40E631fd5">
      <button className="copybutton"><i class="fa fa-clone" aria-hidden="true"></i></button>
      </CopyToClipboard>
      <button className="copybutton"><i class="fa fa-share-alt" aria-hidden="true"></i></button>

    </div>
    </div></div>
  );
};
export default Recive;
