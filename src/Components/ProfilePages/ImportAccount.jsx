import React from "react";
import "./styles.css";
import { Button, Card, InputGroup } from "react-bootstrap";
const ImportAccount = () => {
    return (
        <div className="Main-Password-Container">
            <div className="Header">
                <div className="Image-Container">
                    <img src="./Images/trodex7.png" alt="RandomImage" />
                </div>
                <div className="Side-Bar-Button">
                    <button>
                        <span></span>Ethereum Mainnet
                    </button>
                </div>
            </div>
            <div className="paraContainer">
                <Card className="cardFormimport">
                    {/* <h2 className="titleStyle">Account Name</h2>
                    <input type="text"
                        name="password"
                        className="passwordStyle"
                        ></input> */}
                    <div className="importTitleContainer">
                        <h1 className="importTitleStyle">Import Account</h1>
                        <h4 className="paragraphStyle">Imported accounts will not be associated with your originally created MetaMask account Secret Recovery Phrase. Learn more about imported accounts</h4>
                    </div>
                    <div className="dropDownContainer">
                        <div>
                            <text className="selectTitleStyle">Select Type</text>
                        </div>
                        <select className="dropDownSelectStyle">
                            <option value="privatekey">Private Key</option>
                            <option value="jsonile">JSON File</option>
                        </select>
                    </div>
                    <div className="privateKeyContainer">
                        <div>
                            <text className="privateTextStyle">Paste your private key string here:</text>
                        </div>
                    </div>
                    <div className="privateinputContainer">
                        <div>
                            <input className="privateInputStyle"></input>
                        </div>

                    </div>
                    <div className="lastButtons">
                        <Button variant="outline-primary" className="firstButton">
                            cancel
                        </Button>
                        <Button variant="primary" className="secondButton" >
                            import
                        </Button>

                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ImportAccount;