import React from "react";
import { Link } from "react-router-dom";
import "../../assets/HelpUsTrodex.css";

export const HelpUsTrodex = () => {
  return (
    <div>
      <div className="HelpUs-Main-Container">
        <div className="Trodex-Logo">
          <img src="./Images/trodexWalletLogo.png" alt="" />
        </div>

        <div className="HelpUs-Content-Container">
          <h1>Help us improve Trodex</h1>
          <p className="First-Content">
            Trodex would like to gather usage data to better understand how our
            interact with the extension. This data will be used to continually
            <br />
            improve the usability and user exprience of our product and the
            Ethereum ecosystem.
          </p>

          <div className="Permission-Container">
            <label>Trodex Will...</label>
            <p>Always allow you to opt-out via Setting</p>
            <p>Send anonymized click & pageview events</p>
            <p>
              Never collect Keys, address, transactions, balance, hashes, or any
              personal information
            </p>
            <p>Never collect your full IP address</p>
            <p>Never sell data for profit. Ever</p>
          </div>
        </div>

        <div className="HelpUs-Button-Container">
          <button className="NoThanks-Btn">No Thanks</button>
          <button className="IAgree-Btn">
              <Link to="/ConfirmPassword" style={{color:"#ffffff"}}>I Agree</Link>
          </button>
          {/*<button className="IAgree-Btn">I Agree</button>*/}
        </div>
      </div>
    </div>
  );
};
export default HelpUsTrodex;

