import React, { useState } from "react";


const Electricity = () => {
  const [response, setResponse] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      type: 'electricity',
      electricity_unit: 'kwh',
      electricity_value: (inputValue),
      country: 'us',
    };

    try {
      const res = await fetch('https://www.carboninterface.com/api/v1/estimates', {
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
            <h4 className="">Enter the Electricity Units to estimate</h4>
            <form className="" onSubmit={handleSubmit}>
                <input className="" type="number"  placeholder="Elecricity" value={inputValue} onChange={handleChange}/>
                <button className="" type="submit">Estimate</button>
            </form>
        </div>

        {response.data && response.data.attributes && <p>Carbon Emission: {response.data.attributes.carbon_kg} kg</p>}
        
    </div>
  )
}


export default Electricity
