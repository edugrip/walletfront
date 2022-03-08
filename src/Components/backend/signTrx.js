// // const networkId = 97

// import crypto from 'crypto-js'  

// // import Web3 from 'web3'
// import atob from 'atob'
// // const Web3 = require('web3');
// const url = 'https://data-seed-prebsc-1-s1.binance.org:8545';



// export const signTransaction = async (obj) => {
//     console.log('full obj =',obj)
//     // console.log("pbj props",obj.asset, obj.contractAddress, obj.contractAsset, obj.privateKey, obj.userAddress, obj.withdrawalAddress, obj.withdrawalAmount)

//     // var web3 = await initializedWeb3(url);
//     // FETCH THE WALLET ADDRESS AND PRIVATE KEY FROM LOCAL STORAGE AND THEN DECRYPT THAT DATA
//     let walletAddress = atob(obj.userAddress)
//     let walletPrivateKey = atob(obj.privateKey)
//     console.log('wallet address and wallet private key', walletAddress, walletPrivateKey)
//     let cryptoAddress = crypto.AES.decrypt(walletAddress, 'secret').toString(crypto.enc.Utf8);
//     let cryptoKey = crypto.AES.decrypt(walletPrivateKey, 'secret').toString(crypto.enc.Utf8);
//     let fromAddress = (JSON.parse(cryptoAddress)).address
//     let privateKey = (JSON.parse(cryptoKey)).privateKey
//     console.log('fromAddress = ', fromAddress)
//     console.log('privateKey = ', privateKey)

//     // // let toAddress = value.address; // ADDRESS ENTERED BY THE USER
//     // // let assetName = value.asset;    // ASSET SELECTED BY THE USER 
//     // // let amount = parseFloat(value.amount);  // AMOUNT ENTERED BY THE USER 
//     // // let contractAddress = contractDetails[0].contractAddress;   // FETCH THE CONTRACT ADDRESS FROM STORAGE FOR PARTICULAR CHAIN

    
// }


// // const initializedWeb3 = async (url) => {
// //     let web3 = new Web3(new Web3.providers.HttpProvider(url));
// //     return web3
// // }

