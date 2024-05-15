/* eslint-disable react/prop-types */
import styles from './Search.module.css'
import { useEffect, useState } from "react";
import { searchCoin } from "../../services/cryptoApi";
import { Circles } from "react-loader-spinner";

const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading]= useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setSearchedData([])

    if (!text) {setIsLoading(false)
        return
    }


    const getSearchedData = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        if (res.status === 429) {
          alert("Too Many Requests");
        } else {
          const json = await res.json();
          console.log(json)
          if (json.coins) {
             setIsLoading(false)
            setSearchedData(json.coins);
          } else {
            alert(json.error);
          }
        }
      } catch (error) {
        if (error.name == !"AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true)
    getSearchedData();
    return () => controller.abort();
  }, [text]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {(!!searchedData.length || isLoading)&& (
        <div className={styles.searchResult}>
        {isLoading && <Circles width="40px" height="40px" color='#3874ff'/>}
        <ul>
            {searchedData.map((data)=><li key={data.id}>
                <img src={data.thumb} alt={data.name} />
                <p>{data.name}</p>
            </li>)}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Search;
