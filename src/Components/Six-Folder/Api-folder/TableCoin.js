import React from 'react'
import Coinrow from "./Coinrow"
const titles = ['#', 'Coin', 'name', 'Price'];

const TableCoin = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase()))
    return (

        <table className='table table mt-4 '>
            <thead>
                <tr>
                    {
                        titles.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <Coinrow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>

        </table>


    )
}

export default TableCoin