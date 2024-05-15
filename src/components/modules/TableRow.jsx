/* eslint-disable react/prop-types */

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from './TableRow.module.css'
import { marketChart } from "../../services/cryptoApi";


const TableRow = ({coin,currency,setChart}) => {

  const  {
    id,
    image,
    symbol,
    name,
    price_change_percentage_24h : price_change,
    current_price,
    total_volume,
  }=coin

  const showHandler= async()=>{
    try {
      const res= await fetch (marketChart(id))
      const json = await res.json();
     setChart({...json,coin})
    } catch (error) {
      console.log(error)
      setChart(null)
    }
  }

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{currency ==="usd" ? "$" : currency=== "eur" ? "€": "¥"} {current_price.toLocaleString()}</td>
      <td className={price_change>0 ? styles.success : styles.error }>{price_change.toFixed(2)}%</td>
      <td>{total_volume}</td>
      <td>
        <img
          src={price_change > 0 ? chartUp : chartDown}
          alt=""
        />
      </td>
    </tr>
  );
};

export default TableRow;
