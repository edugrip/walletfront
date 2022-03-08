import React from "react";
import "./Swap.css";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"
const Exchange = () => {
  return (
    <div>
      <div className="Swap-Page-Container">
      
      <h4 className="Swap-Text">Swap</h4>
        <div className="Swap-Container"> 
                <div className="BNB-Container">
                      <div className="BNB-Content">
                         <p>You Pay</p>
                         <b>0</b>
                         <p>Balance: 0 BNB</p>
                      </div>
                      <div className="BNB-Logo">
                          <img src="./Images/smartchain.png.jpg" alt="" height={60} width={60}/> 
                          <h4>BNB</h4>
                      </div>
                </div><hr/>
                <div className="TWT-Container">
                <div className="TWT-Content">
                         <p>You Pay</p>
                         <b>0</b>
                         <p>Balance: 0 BNB</p>
                      </div>
                      <div className="TWT-Logo">
                          <i className="fa fa-shield" style={{fontSize:"24px"}}></i> 
                          <h4>TWT</h4>
                      </div>
                </div>
                <div className="Footer-Button-Section">
                <div className="Parsentage-Buttons">
                <Button className="Per-one" variant="primary">25%</Button>
                <Button className="Per-one" variant="primary">50%</Button>
                <Button className="Per-one" variant="primary">75%</Button>
                <Button className="Per-one" variant="primary">100%</Button>
                </div>
                
                <div className="text">
                  <p>1 BNB ~ 660.52837646 TWT</p>
                  <Button className="Swap" variant="primary">Swap</Button>
                </div>
                </div>
              
        </div>
      <div>
        <Link to="/Exchange" className="Exchange-Link">
          Exchange
        </Link><br/>
        </div>
      </div>
    </div>
  );
};
export default Exchange;
