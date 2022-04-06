import React from 'react'
import './index.css'
import group8 from '../Images/Group8.png'

const index = () => {
  return (
    <div class="container">
        <div class="top">
            <div class="clear-box">
                <h1>Your easiest DeFi platform!</h1>
                <div class="clear-box-items">
                    <div class="p">
                        <p>Llama Capital will simplify your transition to decentralized finance. Trade and earn with our new tools!</p>
                    </div>
                    <div class="llogo">
                        <img id="llogo" src={group8}></img>
                    </div>
                </div>
                
            </div>
            <div class="add">
                <h1>Sign up now!</h1>
                <div>
                    <button className='btn btn-primary btn-block'>Sign Up</button>
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="trade">

            </div>
            <div class="icons">
                <h2>Trade Crypto Currency with Llama Capital</h2>
                <p>Llama Capital provides a variety of currecies to trade from!</p>
                <button className='btn btn-primary btn-block'>Trade Now</button>
            </div>
        </div>
        <div class="footer"></div>
    </div>
  )
}

export default index