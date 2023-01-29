import React from 'react'
import Electricity from './Electricity'
import Flights from './Flights'
import Fuel from './Fuel'
import Shipping from './Shipping'


function Estimates() {
  return (
    <div className="estmate">
      <Electricity/>
      <br></br>
      <br></br>
      <Flights/>
      <br></br>
      <Fuel/>
      <br></br>
      <br></br>
      <Shipping/>
      <div className='estimate2'>
      </div>
      </div>
  )
}

export default Estimates