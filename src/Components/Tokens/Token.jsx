import React from "react";
import {Link} from "react-router-dom"
import "./Token.css";

const Token = () => {
  return (
    <div>
      <div className="Bitcoin-Container">
      <Link to="/Assets"> <i class="fab fa-btc Bitcoin-Icon"></i></Link> 
        <div className="Bitcoin-Content">
        <Link to="/Assets" className="Links-Content"
        > <b >Bitcoin</b></Link>
          <p>$43,110.57+6.18%</p>
        </div>

        <div className="Bitcoin-Amount">
          <big>0 BTC</big>
        </div>
      </div>
      <hr />

      <div className="Ethereum-Container">
       <Link to="/Etherium"> <i class="fab fa-ethereum Ethereum-Icon"></i></Link>
        <div className="Ethereum-Content">
        <Link to="/Etherium" className="Links-Content"> <b> Ethereum</b></Link>
          <p>$3,153.04+5.36%</p>
        </div>

        <div className="Ethereum-Amount">
          <big>0 ETC</big>
        </div>
      </div>
      <hr />

      {/* green bitcoin code start here */}

      <div className="BitcoinCash-Container">
       <Link to="/BitcoinCash"> <i class="fab fa-btc BitcoinCash-Icon"></i></Link>
        <div className="BitcoinCash-Content">
        <Link to="/BitcoinCash" className="Links-Content"> <b>Bitcoin Cash</b></Link>
          <p>$3,153.04+5.36%</p>
        </div>

        <div className="BitcoinCash">
          <big>0 BCH</big>
        </div>
      </div>
      <hr />

      {/* bnb coin code start here */}
      <div className="Bnb-Container">
       <Link to="/BNB"> <img
          src="./Images/smartchain.png.jpg"
          alt=""
          height={50}
          width={50}
          className="Bnb-Icon"
        /></Link>
        <div className="Bnb-Content">
        <Link to="/BNB" className="Links-Content"> <b>BNB</b></Link>
          <p>$3,153.04+5.36%</p>
        </div>
        <div className="Bnb-Amount">
          <big>0 BNB</big>
        </div>
      </div>
      <hr />

      {/* smart chain coin code start here */}
      <div className="SmartChain-Container">
       <Link to="/SmartChain"> <img
          src="./Images/smartchain.png.jpg"
          alt=""
          height={50}
          width={50}
          className="SmartChain-Icon"
        /></Link>
        <div className="SmartChain-Content">
        <Link to="/SmartChain" className="Links-Content">  <b >Smart Chain</b></Link>
          <p>$3,153.04+5.36%</p>
        </div>
        <div className="SmartChain-Amount">
          <big>0 BNB</big>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Token;
