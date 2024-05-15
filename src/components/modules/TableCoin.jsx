/* eslint-disable react/prop-types */

import TableRow from "./TableRow";
import { Circles } from 'react-loader-spinner'

import styles from './TableCoin.module.css'

const TableCoin = ({ coins,isLoading,currency,setChart }) => {
  return (
    <div className={styles.container}>
      {isLoading ? <p><Circles color='#3874ff'/></p>:(
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {coins.map((coin)=>
                <TableRow coin={coin} key={coin.id} currency={currency} setChart={setChart}/>
            )}
        </tbody>
      </table>) }
    </div>
  );
};

export default TableCoin;
