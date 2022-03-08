
import {React, useState} from "react";


const AssetsSend = () => {
    const c = ()=>{
        console.log("changed")
    }
    return(
        <>
        <input onChange={ e=>c(e)} />
        </>
        )
}
export default AssetsSend