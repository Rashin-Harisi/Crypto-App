const BASE_URL= "https://api.coingecko.com/api/v3";
const KEY= "CG-cujtGhksMW9wAQSnAsq2Suyc";

 const getCoinList = (page,currency) =>{
     return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${KEY} `
 }

 const searchCoin= (query)=>{
    return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${KEY}`

 }
 const marketChart= (id)=>{
   return `${BASE_URL}//coins/${id}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${KEY}`
 }

 export {getCoinList, searchCoin,marketChart} 