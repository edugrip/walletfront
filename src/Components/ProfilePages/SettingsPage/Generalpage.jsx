import React from "react";
 import "./SettingCss.css";
import { Button, Card, InputGroup } from "react-bootstrap";
const Generalpage = () => {
    return (
        <div className="headergeneralStyle">
            <h2 className="generalHeaderStyle">General</h2>
            <h4 className="headerCurrencyStyle">Currency Conversion</h4>
            <h5 style={{ paddingLeft: '20px' }}>Updated Sat Feb 19 2022 15:25:05 GMT+0530 (India Standard Time)</h5>
            {/* <div className="inputForm">
                <input type="text" className="inputStyle"></input>
            </div> */}
            <div className="dropDownstyle">
                <select className="standard-select" >
                    <option value="ADX-AdEx">ADX-AdEx</option>
                    <option value="ADT-adToken">ADT-adToken</option>
                    <option value="ANT">ANT</option>
                    <option value="REP">REP</option>
                    <option value="AUD">AUD</option>
                    {/* <option value="Option length">Option that has too long of a value to fit</option> */}
                </select>
            </div>

            <h4 className="headerCurrencyStyle">Primary Currency</h4>
            <h5 style={{ paddingLeft: '20px' }}>Select native to prioritize displaying values in the native currency of the chain (e.g. ETH). Select Fiat to prioritize displaying values in your selected fiat currency.</h5>
            <div className="redioButtonContainer">
                <input type="radio" id="age1" name="age" value="30" />
                <label for="age1">MATIC</label>
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">Fiat</label>
            </div>
            <h4 className="headerCurrencyStyle">Current Language</h4>
            <h5 style={{ paddingLeft: '20px' }}>English</h5>
            <div className="dropDownstyle">
                <select className="standard-select" >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Malay">Malay</option>
                    <option value="Dansk">Dansk</option>
                    {/* <option value="Option length">Option that has too long of a value to fit</option> */}
                </select>
            </div>

        </div>
    )
}
export default Generalpage;