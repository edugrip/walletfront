import React from 'react';
import { Link } from 'react-router-dom';

const BitcoinCash = () => {
    return (
        <div>
        <div className="Main-Icon-Container">
          <div className="Main-Header-Icons"></div>

          <div className="BitcoinContainer">
            <i class="fab fa-btc BitcoinCash-Icon"></i>
            <h1 className="MoneyCounter">0 BCH</h1>

          </div>
          
          <div className="Link-Icons-Container">
            <div className="Main-Icons">
              <Link to="/AssetsSend" className="Send-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_upload
                </i>
                <Link to="/">
                  <b id="Content-icon-buy">Send</b>
                </Link>
              </Link>

              <Link to="/ReciveQrcode" className="Receive-Icon">
                <i id="Content-icon-buy" className="material-icons">
                  file_download
                </i>
                <b id="Content-icon-buy">Receive</b>
              </Link>
            </div>
          </div>
        </div>


      
        <div className="historyContainer">

          <div className="borderMainContainer">
            <div className="dateTextStyle">Nov 10,2021</div>
            <div className="dataContainer">
              <i class="fa fa-upload"></i>
              <div>
                <div>Sent</div>
                <div>0xb4flf45ggfhghndtm</div>
              </div>
              <div>
                -100 USDT
              </div>
            </div>

            <div className="dateTextStyle">Nov 11,2021</div>
            <div className="dataContainer">
              <i class="fa fa-upload"></i>
              <div>
                <div>Sent</div>
                <div>0xb4flf45ggfhghndtm</div>
              </div>
              <div>
                -100 USDT
              </div>
            </div>
            <div className="dateTextStyle">Nov 12,2021</div>
            <div className="dataContainer">
              <i class="fa fa-upload"></i>
              <div>
                <div>Sent</div>
                <div>0xb4flf45ggfhghndtm</div>
              </div>
              <div>
                -100 USDT
              </div>
            </div>

          </div>



        </div>
        
        
        
        
        
        
        </div>
    );
};

export default BitcoinCash;