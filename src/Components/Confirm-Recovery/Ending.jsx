import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Header from "../Six-Folder/Header";
//import "./Ending.css";
import "../../assets/Account.css";
import "../../assets/Confirm-Password.css";
import "../../assets/Ending.css";
let apiUrl = `https://backend.trodex.io/`


const Ending = () => {
  let mnemonic = localStorage.getItem('mnemonic')
  const mnemonicArray = mnemonic.split(" ");
  console.log('mnemonic in ending', mnemonicArray)

  // const [one, setZero] = useState("");
  // const [two, setOne] = useState('');
  // const [three, setTwo] = useState('');
  // const [four, setThree] = useState("");
  // const [five, setFour] = useState("");
  // const [six, setFive] = useState("");
  // const [seven, setSix] = useState("");
  // const [eight, setSeven] = useState("");
  // const [nine, setEight] = useState("");
  // const [ten, setNine] = useState("");
  // const [eleven, setTen] = useState("");
  // const [twelve, setEleven] = useState("");
  const [seedArray, setSeedArray] = useState([])
  const [stringifiedSeed, setstringifiedSeed] = useState([])
  const updateSeed = async (seedValue) => {
    var newArray = seedArray;
    newArray.push(seedValue)
    setSeedArray(newArray)
    // console.log('value in values',  newArray)
    console.log('seedArray seedArray dddddddddddddddddd=  ', seedArray)
    let ss = JSON.stringify(newArray);
    setstringifiedSeed([])

  }
  useEffect(() => {
    console.log("array", seedArray)
  }, [seedArray])

  const seedVerification = async () => {
     const result = JSON.stringify(mnemonicArray) == JSON.stringify(seedArray)
    // const result = true
    if (result) {
      await fetch(`${apiUrl}create-wallet?seedArray=${seedArray}`)
        .then((result) => {
          result.json().then((resp) => {
            console.log("wallet", resp);
            if (resp.status == 'ok') {
              localStorage.setItem("address", resp.result.address);
              localStorage.setItem("privateKey", resp.result.privateKey);
              window.location.href = ("/TestPage")
            } else {
              document.getElementById('message').innerHTML = resp.message
            }

          })
        })
        .catch(error => {
          alert(error.message)
        })

    }
    else {
      document.getElementById('message').innerHTML = 'Invalid Seed'
    }
  }




  //  <--------Button Show And Hide States Start Here------>
   const [show1,setShow1] =useState("Button1")
   const hide1=()=>{
     setShow1("HideButton1");
   }

   const [show2,setShow2] =useState("Button2")
   const hide2=()=>{
     setShow2("HideButton2");
   }

   const [show3,setShow3] =useState("Button3")
   const hide3=()=>{
     setShow3("HideButton3");
   }

   const [show4,setShow4] =useState("Button4")
   const hide4=()=>{
     setShow4("HideButton4");
   }

   const [show5,setShow5] =useState("Button5")
   const hide5=()=>{
     setShow5("HideButton5");
   }

   const [show6,setShow6] =useState("Button6")
   const hide6=()=>{
     setShow6("HideButton6");
   }

   const [show7,setShow7] =useState("Button7")
   const hide7=()=>{
     setShow7("HideButton7");
   }

   const [show8,setShow8] =useState("Button8")
   const hide8=()=>{
     setShow8("HideButton8");
   }

   const [show9,setShow9] =useState("Button9")
   const hide9=()=>{
     setShow9("HideButton9");
   }

   const [show10,setShow10] =useState("Button10")
   const hide10=()=>{
     setShow10("HideButton10");
   }

   const [show11,setShow11] =useState("Button11")
   const hide11=()=>{
     setShow11("HideButton11");
   }

   const [show12,setShow12] =useState("Button12")
   const hide12=()=>{
     setShow12("HideButton12");
   }
  
   //  <--------Button Show And Hide States End Here------->
  // const [Remove,setRemove]=useState();
  // const rem=()=>{ 
  //   setRemove(seedArray.splice(seedArray.length))
  // }
  
 

  return (
    <div className="Main-Password-Container password_Cont">
      <div className="Wallet-Recovery-div">
        <div className="secretPhrase_logo">
            <img src="./Images/trodex7.png" className="brandName" alt="RandomImage"/>
        </div>
        <div className="secretPhrase_body">
            <div className="SecretRecovery_Phrase">Your Secret Recovery Phrase</div>
            <p className="SecRecovery_phraseCont mt-1">Write down or copy these words in the right order and save them somewhere safe</p>
            <div className="SecretRec-Content">
              {
                  seedArray.map(item => {
                    console.log('dafad',item)
                    return (<button style= {{color:"rgba(35, 44, 51, 0.78)"}}>{item}</button>)
                  }
                )}
            </div>
            {/* <p className="SecretRec-Content"></p> */}
            <div className="Secret_Boxes">
                <input
                  onClick={(e) => {updateSeed(e.target.value); hide1();}}
                  type="submit"
                  value={mnemonicArray[3]}
                  className={show1}
                />
              
                <input
                  onClick={(e) => {updateSeed(e.target.value); hide2();}}
                  type="submit"
                  value={mnemonicArray[8]}
                  className={show2}
                />
                
                <input
                  onClick={(e) => {updateSeed(e.target.value); hide3()}}
                  type="submit"
                  value={mnemonicArray[4]}
                  className={show3}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide4();}}
                  type="submit"
                  value={mnemonicArray[0]}
                  className={show4}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide5();}}
                  type="submit"
                  value={mnemonicArray[9]}
                  className={show5}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide6();}}
                  type="submit"
                  value={mnemonicArray[10]}
                  className={show6}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide7()}}
                  type="submit"
                  value={mnemonicArray[1]}
                  className={show7}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide8()}}
                  type="submit"
                  value={mnemonicArray[11]}
                  className={show8}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide9()}}
                  type="submit"
                  value={mnemonicArray[7]}
                  className={show9}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide10();}}
                  type="submit"
                  value={mnemonicArray[2]}
                  className={show10}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value);  hide11();}}
                  type="submit"
                  value={mnemonicArray[5]}
                  className={show11}
                />

                <input
                  onClick={(e) => {updateSeed(e.target.value); hide12();}}
                  type="submit"
                  value={mnemonicArray[6]}
                  className={show12}
                />
            </div>
            <div className="dash"></div>
            <p className="HideSecret">Do not share your secret phrase!</p>
            <p className="secretPhrase_reveal">If someone has secret phrase they will have full control of your wallet</p>
            <div>
              <div id="message" className="err-msg"></div>
            </div>
            <div className="recovery-footer">
              <button class="create_btn" onClick={seedVerification} >Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Ending;

