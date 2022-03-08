import React from "react";
import { Link } from "react-router-dom";
import "./addTokenCss.css";
import { Button, Card, InputGroup } from "react-bootstrap";

const NftsToken = () => {
    return (
        <div className="Main-Token-Container">
            <div className="headerStyle">
                <div className="ImageContainer">
                    <img src="./Images/trodex7.png" alt="RandomImage" />
                </div>
                <div className="Side-Bar-Button">
                    <button>
                        <span></span>Ethereum Mainnet
                    </button>
                </div>
            </div>
            <div className="paraContainer">
                <Card className="cardFormImport">

                    <div className="importTitleContainer">
                        <h1 className="importTitleStyle">Import NFTs Tokens</h1>
                        <h4 className="paragraphStyle">Custom Token</h4>

                    </div>
                    <div className="privateKeyContainerr">
                        <div>
                            <text className="privateTextStyle">Token Contract Address</text>
                        </div>
                    </div>
                    <div className="privateinputContainer">
                        <div>
                            <input className="privateInputStyle"></input>
                        </div>

                    </div>
                    <div className="privateKeyContainerr">
                        <div>
                            <text className="privateTextStyle">Token Symbol</text>
                        </div>
                    </div>
                    <div className="privateinputContainer">
                        <div>
                            <input className="privateInputStyle"></input>
                        </div>

                    </div>
                    <div className="privateKeyContainerr">
                        <div>
                            <text className="privateTextStyle" >Token Decimal</text>
                        </div>
                    </div>
                    <div className="privateinputContainer">
                        <div>
                            <input className="privateInputStyle"></input>
                        </div>

                    </div>
                    
                    <Button variant="outline-primary" className="addTokenButton">
                    Add Custom Token
                        </Button>
                </Card>
            </div>
        </div>
    )
}
export default NftsToken;