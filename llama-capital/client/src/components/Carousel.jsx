import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import '../css/Carousel.css'

const Carousel = (props) => {

    const Next = ({onClick}) => {
        return (
            <div className='nextcarousel' onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }

    const Previous = ({onClick}) => {
        return (
            <div className='previouscarousel' onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const settings = {
        infinite:true,
        speed:200,
        slidesToShow:3,
        slidesToScroll:3,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: <Next />,
        prevArrow: <Previous />
    }

    const [ markets, setMarkets ] = useState();

    useEffect(() => {
       axios.get("http://localhost:8000/api/markets", {withCredentials: true})
          .then(res => setMarkets(res.data))
          .catch(err => console.log(err));
    }, []);
 
    return (
        <div className='tradecarousel'>
            <Slider {...settings}>
                { markets && markets.map((market, idx) => {
                    return(
                        <div className='coin-cardcarousel' key={idx}>
                            <div className='coincarousel' key={idx}>
                                <Link to={'/singleCurrency/' + market.id}><img id='coincarousel' src={market.image} alt={market.id} /></Link>
                            </div>
                        </div>
                    )}
                )}
            </Slider>
        </div>
    )
 }

export default Carousel