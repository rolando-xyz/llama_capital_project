import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CoinSliderTwo from './CoinSliderTwo'
import '../css/coin.css'

const CoinInfoTwo = (props) => {
   const [ currency, setCurrency ] = useState();
   const { id } = useParams();

   useEffect(() => {
      axios.get(`http://localhost:8000/api/currency/${id}`, {withCredentials: true})
         .then(res => setCurrency(res.data))
         .catch(err => console.log(err));
   }, []);

   return (
      <div className='container'>
         <div className='box'>
            <CoinSliderTwo />
            <div>
               { currency &&
                  <>
                     <div>
                        <img src={currency.image.small} alt={currency.name} />
                     </div>
                     <div className='info'>
                        <p>Name: {currency.name}</p>
                        <p>Symbol: {currency.symbol}</p>
                        {/* <p>Description: {currency.description.en}</p> */}
                        <p>URL: <a href={currency.links.homepage[0]}> {currency.links.homepage[0]}</a></p>
                        <p>Twitter: <a href={`https://www.twitter.com/${currency.links.twitter_screen_name}`}>{currency.links.twitter_screen_name}</a></p>
                        <p>Started: {currency.genesis_date}</p>
                     </div>
                  </>
               }
            </div>
         </div>
      </div>
   )
}

export default CoinInfoTwo