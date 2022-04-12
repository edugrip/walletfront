import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./addTokenCss.css";
import Header from "../Header";
import { setLocalObj, getApi, getLocalObj, networks } from "../../helpers/helpers";

import { Button, Card, InputGroup } from "react-bootstrap";

const AddToken = () => {
    let [assets, setAssets] = useState([])
    let walletAddress = localStorage.getItem('address')
    let userAddresss = atob(walletAddress)
    let userAddress = walletAddress
    const [contractAddress, setContractAddress] = useState('')
    const [tokenSymbol, setSymbol] = useState('')

    // console.log("contract Address" ,contractAddress, tokenSymbol)
    const getAssets = async () => {
        console.log('hello token')
        let assetsNames = await getApi('get-asset', { userAddress })
        console.log("get assets called", assetsNames)

        setAssets(assetsNames.result)
    }

    // const addToken = () => {
    //     console.log("contract Address", contractAddress, tokenSymbol)
    //     localStorage.setItem("contractAddress", contractAddress);
    //     localStorage.setItem("contractAsset", tokenSymbol.toUpperCase());
    // }

    useEffect(() => {
        getAssets()
    }, [])

    return (
        <div >
            <Header />
            <div>
                <div className="container pt-0 mt-0">
                    <div class="table-responsive">
                        <table className="table table-hover table-borderless">
                            <thead>
                                <tr>

                                    <th>AssetName</th>
                                    {/* <th>balance</th>
                                    <th>Update Balance</th>
                                    <th>Remove Asset</th> */}



                                </tr>
                            </thead>

                            {assets ? <>{assets.map(item => (
                                <tbody>
                                    <tr>
                                        
                                            <td>{item.assetName == 'BNB' || item.assetName=='BTC' ?<></>:<> {item.assetName}</>} </td>
                                            
                                        {/* <td>{item.assetName == 'BNB' || item.assetName=='BTC' ?<></>:<> {item.assetName}</>} </td> */}
                                        {/* <td>{item.balance}</td> */}
                                        {/* <td > <button className="btn btn_buynow update_bal" value={JSON.stringify(item)} onClick={(event) => Updatebalance(event)}>Refresh</button> </td>
                                        <td><button value={JSON.stringify(item)} onClick={(event) => removeAsset(event)}>Remove Asset from list </button></td>
                                        <td><a href={"/AssetsSend?assetName=" + item.assetName}> Send</a> </td>

                                        <td><Link className="btn_buynow" to={{ pathname: "/Assethistory", state: { item } }}>View Details</Link> </td> */}


                                    </tr>
                                </tbody>
                            ))}</> : <>No Assets to show.</>}

                        </table>
                    </div>


                    <Link to="/AddAssestname" className='btn btn-primary mx-2 my-2'> Add Tokens</Link>
                </div>
            </div>
        </div>
    )
}
export default AddToken;