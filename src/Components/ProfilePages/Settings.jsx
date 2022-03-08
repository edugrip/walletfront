import React from "react";

import CreateAccount from "../ProfilePages/CreateAccount";
import Generalpage from "./SettingsPage/Generalpage";
import NetworksPage from "./SettingsPage/NetworksPage";
import Header from '../Six-Folder/Header'
import AboutPage from "./SettingsPage/AboutPage";
import "./styles.css"
const Settings = () => {
    return (
        <>
            <div className="Main-Password-Container">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 mx-auto">
                        <div className="topic">Add New Network</div>
                          <NetworksPage />
                        </div>
                    </div>
                 
                </div>
            </div>

        </>
    );
};

export default Settings;