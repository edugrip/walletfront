import React from 'react';
import "./Bitcoin.css"

const Bitcoin = () => {
    return (
        <div>
        <div>
        <h1>Bitcoin</h1>
        <label>price:</label>
        <input placeholder='38698'></input>
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

export default Bitcoin;