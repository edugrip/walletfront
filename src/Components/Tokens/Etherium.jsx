import React from 'react';
import "./Bitcoin.css"

const Etherium = () => {
    return (
        <div>
        <div>
        <h1>Ethereum</h1>
        <label>price:</label>
        <input placeholder='2685.98'></input>
        <br></br>
        <br></br>
        <label>Balance:</label>
        <input></input>
        </div>
        <div className='buttonsection'>
          <button className='Sendbutton'>Send</button>
          
          <button className='Recievebutton'>Receive</button>
         
          <button className='AdressCopy'>Address Copy</button>
      
        </div>
        <div>
            <h2 className='Transactionhistory'>Transaction history</h2>
        </div>
        <div className='H3component'>
            <h3 className='headingOne'>Receive</h3>
            <h3 className='headingtwo'>Sent</h3>
        </div>
        
        
        
        
        
        
        </div>
    );
};

export default Etherium;