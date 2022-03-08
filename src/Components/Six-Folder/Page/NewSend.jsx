import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Navigat.css";

const NewSend = () => {
  return (
    <div>

    
      <div className="Send-Compon">
        <Link to="/TestPage">
          <i id="content-icon" className="fas fa-arrow-left Send-Icon "></i> </Link>
          <input
          type="text"
          placeholder="Search-Send "
          style={{ Color: "white" }}
        />
       
      </div>

      {/* first input code start here */}
      <h1>Send</h1>
      <div className="Recipient-Add">
        <div className="Scaner-Input">
          <input
            type="text"
            placeholder="Recipient Address"
            className="Recipient-Input"
          />
          <i
            className="material-icons Scaner-Icon"
            style={{ fontSize: "36px" }}
          >
            scanner
          </i>
          <button className="Paste-Button">PASTE</button>
        </div>
      </div>



      <div className="Amount-Input-Container">    
          <fieldset className="Input-Border">
            {/* <legend className="Border-text">Amount USDT</legend> */}
                  <input type="text"
                  placeholder="Insufficient funds for gas"
                   className="Amount-Input"/>
                  {/* <button className="Max-Button">MAX</button>
                  <button className="USDT-Button">USDT</button> */}
          </fieldset>
      </div>

      

      <div className="assetsContainer">
     
      <div className="Recipient-Add">
      <label style={{marginTop:'10px'}}>Assets:</label>
        <div className="Scaner-Input">
        
          <input
            type="text"
            placeholder="Balance:
0
ETH"
            className="Assets-Input"
          />
        </div>
      </div>


      
      </div>

      <div className="assetsContainer">
     
      <div className="Recipient-Add">
      <label style={{marginTop:'10px'}}>Amount:</label>
        <div className="Scaner-Input">
        
          <input
            type="text"
                       placeholder="0
ETH

$0.00
USD"
            className="Assets-Input"
          />
        </div>
      </div> 


      
      </div>
      {/* first input code end here */}

      {/* second input code start here */}
      


      <div className="lastButtons">
                        <Button variant="outline-primary" className="firstButton">
                            cancel
                        </Button>
                        <Button variant="primary" className="secondButton" >
                            Next
                        </Button>

                    </div>
      {/* second input code end here */}
    </div>
  );
};
export default NewSend;
