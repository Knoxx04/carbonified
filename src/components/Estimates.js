import React from 'react'
import Electricity from './Electricity'
import Flights from './Flights'
import Fuel from './Fuel'
import Shipping from './Shipping'


function Estimates() {
  return (
    <div className="estmate">
      <Electricity/>
      <Flights/>
      <Fuel/>
      <Shipping/>
      </div>
  )
}

export default Estimates