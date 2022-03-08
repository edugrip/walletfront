import React from 'react'
import "./Coinrow.css";
const Coinrow = ({coin,index}) => {
    console.log(coin,index);
  return (
         <tr>
         <td>{index}</td>
        <td>
        <img src={coin.image } alt={coin.name}  className='img-fluid me-3 Coin-Image'/>
        </td>
        <td>
        <span className='Coin-Name'>
            {coin.name}
            </span>
            
            <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
        </td>
        <td>
            {coin.current_price}
        </td>
      
    </tr> 
    
  )
}
export default Coinrow;