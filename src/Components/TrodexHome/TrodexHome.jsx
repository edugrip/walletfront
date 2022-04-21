import React from "react";
import "../../assets/TrodexHome.css";
import {Link} from "react-router-dom";
export const TrodexHome = () => {
  return(
   <div className="Default-Page-Container">
       <div className="Logo-Container">
           <img src="./Images/TrodexIcon.png" alt="Logo" width={70} height={100}/>
       </div>
       <div className="Heading-Container">
          <h1>Welcome to Trodex</h1>
       </div>

       <div className="Content-Container">
           <p>
               Connecting you to Ethareum and the Decentralized web <br/>
               We're happy to see you
           </p>
       </div>
       <div className="Button-Container">
           <button className="Start-Button"><Link to="/WalletSummary" className="Get-Start-Link">Get Started</Link></button>
       </div>
   </div>
  )
};
export default TrodexHome;
