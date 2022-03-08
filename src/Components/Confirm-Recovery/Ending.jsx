// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom";
// import TestPage from "../Six-Folder/TestPage";
// import "./Ending.css";
// const Ending = () => {
//   const [activeNumber, setActiveNumber] = useState([]);
//   const handleFilterCoin = (number) => {
//     setActiveNumber((oldData) => {
//       return [
//         ...oldData,
//         number
//       ]
//     });
//   }
//   const name = "Your Secret Recovery Phrase makes it easy to";
//   const name1 = "Your Secret Recovery Phrase makes it easy to back up and restore your ";
//   const array = name.split(' ');
//   const result = array.length;
//   console.log('length is', result);

//   const percentagebutton = array.map(number => {
//     return (
//       <input
//         onClick={() => handleFilterCoin(number)}
//         type="submit"
//         value={number}
//         className="Button"
//       />
//     )
//   });
//   const successhandle = () => {
//     <TestPage />
//   }
//   const handlenextbutton = () => {
//     if (name === name1) {
//       alert("correct Secret Phrase");

//     }
//     else {
//       alert("incorrect Secret Phrase");
//     }
//   }
//   return (
//     // header logo code start here
//     <div className="main-counter">
//       <div className="Body-counter">
//         <img src="./images/trodex1.png" alt="" className="Photo" />
//       </div>

//       {/* right side button code start here */}
//       <div className="Button-Counter">
//         <button>
//           <span className="Dotted"></span>Ethereum Mainnet
//         </button>
//       </div>

//       {/* main content code start here */}
//       <div className="Border">
//         <h2 className="Head2">Confirm your Secret Recovery Phrase</h2>
//         <p className="Paragraph">
//           Please select each phrase in order to make sure it is correct.
//         </p>

//         <div className="Body2-Counter">
//           <label>{activeNumber}</label>
//           {console.log(activeNumber)}
//         </div>

//         {/* last button code start here */}
//         <div className="Boxes">
//           {percentagebutton}
//         </div>
//         {/* footer button code start here */}
//         <div className="end-Buttons">
//           <Button variant="outline-primary" className="one-Button">
//             Remind me later
//           </Button>
//           <Button variant="primary" className="two-Button" onClick={() => handlenextbutton()}>
//             Next
//           </Button>
//           <Link to='/testpage'><Button variant="primary" className="two-Button">
//             Next
//           </Button>
//           </Link>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default Ending;
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Header from "../Six-Folder/Header";
import "./Ending.css";
let apiUrl = `http://64.227.175.219:8005/`


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


  return (
    // header logo code start here
    <div className="bgseed">
    <Header/>

      {/* main content code start here */}
      <div className="Border">
        <h2 className="Head2">Confirm your Secret Recovery Phrase</h2>
        <p className="Paragraph">
          Please select each phrase in order to make sure it is correct.
        </p>
        <div className="Body2-Counter">
          {
            seedArray.map(item => {
              console.log(item)
              return (<button>{item}</button>)
            }
            )}


        </div>
        <div className="Boxes">
          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[3]}
            className="Button"

          />
          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[8]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[4]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[0]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[9]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[10]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[1]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[11]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[7]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[2]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[5]}
            className="Button"
          />

          <input
            onClick={(e) => updateSeed(e.target.value)}
            type="submit"
            value={mnemonicArray[6]}
            className="Button"
          />
        </div>
        {/* footer button code start here */}
        <p id='message'> </p>
        <div className="end-Buttons">
          {/* <Button variant="outline-primary" className="one-Button">
            Remind me later
          </Button> */}
       
          <br/>
          <Button variant="primary" className="two-Button" onClick={seedVerification} >
            Next
          </Button>

          {/* <Link to="./TestPage"><Button variant="primary">
            Next
          </Button></Link> */}
        </div>
      </div>

    </div>
  );
};
export default Ending;

