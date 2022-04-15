
import React from "react";
import "./SettingCss.css";
import { Button, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
const NetworksPage = () => {
    //let apiUrl = `https://143.110.250.238:8000/`
    let apiUrl = `https://backend.trodex.io/`
    const [networkname, setNetworkname] = useState('')
    let walletAddress = localStorage.getItem('address')
    const [rpculr, setRpculr] = useState('')
    const [chainid, setChainid] =useState('')
    const [symbol, setSymbol] =useState('')
    const [explorer, setExplorer] =useState('')
    
  
  
    console.log("value from  fome" ,networkname ,rpculr ,chainid,symbol,explorer, walletAddress)
  
  
    const AddAssets = async () => {
    
       await fetch(`${apiUrl}add-network?networkName=${networkname}&rpc=${rpculr}&chainId=${chainid}&currencySymbol=${symbol}&blockExplorer=${explorer}&userAddress=${walletAddress}`)
        .then((result) => {
          console.log('resulttt dsdsdsdsdsdsdsdsdsdsdsdsdd', result)
           result.json().then((resp) => {
            console.log("data", resp);
          if (resp.status == 'ok' ) {
              console.log("response is ok" ,resp);
              document.getElementById('message').innerHTML = resp.message
             }else{
              document.getElementById('message').innerHTML = resp.message
             }
             
          })
  
        })
        
    }
  
 
    return (
           <>
          
           
           
                    <div className="rightDataStyle" >
                        <label className="rightLableStyle">Network Name :</label>
                    </div>


                    <div className="rightDataStyle" >
                        <input type='text' className="inputStyle form-control border border-2" value={networkname} onChange={(e) => setNetworkname(e.target.value)} id="networkname" style={{border:"1px solid #bdc3c7"}} />
                    </div>
                    <div className="rightDataStyle">
                        <label className="rightLableStyle">New RPC URL :</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input  type='text' className="inputStyle form-control border border-2" value={rpculr} onChange={(e) => setRpculr(e.target.value)} id="rpcurl" style={{border:"1px solid #bdc3c7"}}/>
                    </div>

                    <div className="rightDataStyle">
                        <label className="rightLableStyle">Chain ID :</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input type='text' className="inputStyle form-control border border-2" value={chainid} onChange={(e) => setChainid(e.target.value)} id="chainid" style={{border:"1px solid #bdc3c7"}}/>
                    </div>
                    <div className="rightDataStyle">
                        <label className="rightLableStyle">Currency Symbol(Optional) :</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input  type='text'  className="inputStyle form-control border border-2" value={symbol} onChange={(e) => setSymbol(e.target.value)} id="symbol"  style={{border:"1px solid #bdc3c7"}}/>
                    </div>
                    <div className="rightDataStyle">
                        <label className="rightLableStyle">Block Explorer URL(Optional) :</label>
                    </div>
                    <div className="rightDataStyle" >
                        <input type='text' className="inputStyle form-control border border-2" value={explorer} onChange={(e) => setExplorer(e.target.value)} id="explorer"  style={{border:"1px solid #bdc3c7"}}/>
                    </div>
                    <div className="cancelSaveStyle">

                     
                        <p id="message"></p>
                        <Link to='/testpage'><Button variant="outline-primary" className="cancelButton">
                            Cancel
                        </Button></Link>
                        <Button variant="primary" className="saveButton mx-3" onClick={AddAssets} >
                            Save
                        </Button>
                    </div>
              
        </>
    )
}
export default NetworksPage;