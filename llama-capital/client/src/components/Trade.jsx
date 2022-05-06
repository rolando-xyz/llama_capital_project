import React, { Component } from 'react'
import CoinInfo from './CoinInfo'
import CoinSlider from "./CoinSlider"
import RegistrationForm from "./RegistrationForm"

export default class Trade extends Component {
  
  render() {
    return (
      <div>
        <CoinSlider />
        <CoinSlider />
      </div>
    )
  }
}
