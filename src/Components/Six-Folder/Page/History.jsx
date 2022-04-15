import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Header from "../Header";

const History = () => {
  let apiUrl = `https://backend.trodex.io/`

  const [withdrawListdata, setWithdrawListdata] = useState('')

  let walletAddress = localStorage.getItem('address')
  console.log("walletAddress", walletAddress)

  const fetchDataAsset = async () => {
    await fetch(`${apiUrl}trx-history?userAddress=${walletAddress}`).then((result) => {
      console.log('resulttt history dsdsdsdsdsdsdsdsdsdsdsdsddccxcxcxc', result)
      result.json().then((resp) => {
        var data = resp.result;
        let withdrawListdata = data
        setWithdrawListdata(withdrawListdata)
        console.log('history trtytytyty', data)
      })
    })
  }

  useEffect(() => {
    fetchDataAsset()
  }, [])

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

                  {/* <tbody> */}
                  {/* <tr>
                    <td className="text-truncate text-truncatebox" ><a  href="">0x55A8bFbCA3C5999B12E2faaA8Dd5E03925B02B02</a>  </td>
                  </tr>
                </tbody> */}


                  {withdrawListdata ? <>{withdrawListdata.map(item => (
                    <tbody>
                      <tr>
                        <td className="text-truncate text-truncatebox" ><a href="">{item.toAddress} </a></td>

                        <td>{item.asset}</td>
                        <td>{item.amount}</td>
                        <td className="text-truncate text-truncatebox" ><a href="">{item.txHash} </a></td>
                        <td>{item.timeStamp}</td>
                      </tr>
                    </tbody>
                  ))}</> : null}

                </table>
              </div>
            </div></div></div></div></div>
  );
};
export default History;
