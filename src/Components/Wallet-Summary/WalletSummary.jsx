import React from "react";
import { Link } from "react-router-dom";
import "../../assets/WalletSummary.css";
export const WalletSummary = () => {
  return (
    <div>
      <div className="Wallet-Container">
        <div className="Trodex-Logo-Container">
          <img src="./Images/trodexWalletLogo.png" alt="" />
        </div>

        <div className="Trodex-Heading">
          <h1>New to Trodex ?</h1>
        </div>

        <div className="CreateWallet-Buttons">
             {/* Import Wallet Code Here */}
          <div className="ImportWallet-Container">
            <div className="ImportWallet-Image">
              <img src="./Images/importWallet.png" alt="" />
            </div>
            <div className="ImportWallet-Heading">
                 NO, I Already  Have a Secret Recovery Phrase
            </div>
            <div className="ImportWallet-Btn">
                <button>
                    Import Wallet
                </button>
            </div>
          </div>

          {/* Create Wallet Code Here */}
          <div className="CreateWallet-Container">
          <div className="CreateWallet-Image">
              <img src="./Images/createWallet.png" alt="" />
            </div>
            <div className="CreateWallet-Heading">
                 Yes, Let's Get Set Up!
            </div>
            <div className="CreateWallet-Btn">
                <button>
                    <Link to="/HelpUsTrodex" className="CreateWallet-Link">Create a Wallet</Link>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WalletSummary;

