import React, { useState } from "react";


const Flights = () => {
  const [response, setResponse] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
        
            type: "flight",
            passengers:(inputValue),
            legs: [
              {"departure_airport": "", "destination_airport": ""},
              {"departure_airport": "", "destination_airport": ""}
            ]
          
    };

    try {
      const res = await fetch('', {
        method: 'POST',
        headers: {
          Authorization: `Bearer YQytsSidKitpSJj1eNbGsw`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
    }
  };



  return(
    <div className="">
        <div className="">
            <h4 className="">Enter Number of Passengers</h4>
            <form className="" onSubmit={handleSubmit}>
                <input className="" type="number" value={inputValue} onChange={handleChange}/>
                <button className="" type="submit">Estimate</button>
            </form>
        </div>

        {response.data && response.data.attributes && <p>Carbon Emission: {response.data.attributes.carbon_kg} kg</p>}
        
    </div>
  )
}


export default Flights