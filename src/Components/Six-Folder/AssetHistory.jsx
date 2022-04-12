import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MultiCoin.css";
import Header from "./Header";
import { getApi } from "../helpers/helpers";


const AssetHistory = (props) => {

  console.log("value from previous page props", props)

 const getHistory = ()=> {
let userAddress = localStorage.getItem("address")
getApi('deposit-history', {userAddress})

}
useEffect(()=>{
getHistory()
},[])


  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="Send-Compon">
            <div className="col-lg-12 col-12 col-md-12">
              <div class="table-responsive">
                <table class="table_fot table table">
                  <thead className="table_fot">
                    <tr>
                      <th>To Address</th>
                      <th>Asset Name</th>
                      <th>Amount</th>
                      <th>Transaction Hash</th>
                      <th>Date</th>



                    </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td className="text-truncate text-truncatebox" ><a  href="">0x55A8bFbCA3C5999B12E2faaA8Dd5E03925B02B02</a>  </td>
                  </tr>
                </tbody>



                </table>
              </div>
            </div></div></div></div></div>
  );
};
export default AssetHistory;
