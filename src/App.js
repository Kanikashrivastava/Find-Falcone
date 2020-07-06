import React, { useState } from 'react';
import { DestinationVehicleBook } from './Planet'
import { useToken, usePlanets, useVehicles, useFalconFound } from './hooks';
import Button from '@material-ui/core/Button';



function App() {
  const [selectedPlanetNames, setSelectedPlanetNames] = useState([])
  const [selectedVehicleNames, setSelecteVehicleNames] = useState([])
  const [token, updateToken] = useToken();
  const planets = usePlanets();
  const vehicles = useVehicles();
  const [status, planet_name, setPayload, resetFalconToStart] = useFalconFound();

  const onSubmit = () => {
    let payload = {
      "token": token,
      "planet_names": selectedPlanetNames,
      "vehicle_names": selectedVehicleNames
    }
    setPayload(payload)
  }
  const handlePlanetChange = (planetName) => {
    setSelectedPlanetNames((prevPlanetNames) => [...prevPlanetNames, planetName])
  };
  const handleVehicleChange = (vehicleName) => {
    setSelecteVehicleNames((prevVehicleNames) => [...prevVehicleNames, vehicleName])
  };
  const onReset = () => {
    setSelectedPlanetNames([])
    setSelecteVehicleNames([])
    resetFalconToStart();
    updateToken();
  }
  return (
    <div className="App">
      <header className="App-header">
        {`Find Falcone`}
      </header>
      {status ? 
      
      <div>
        {status === "success" && 
          <div>
            <div>{`Success! Congratulations on Finding Falcone. King Shan is mighty pleased.`}</div>
            <div>{`Planet Found: ${planet_name}`}</div>
          </div>
        }
      </div>
      : [1, 2, 3, 4].map((optionNum) => {
        return <DestinationVehicleBook
          optionNum={optionNum}
          planets={planets}
          vehicles={vehicles}
          handlePlanetChange={handlePlanetChange}
          handleVehicleChange={handleVehicleChange} />
      })}
      <Button variant="contained" color="primary" onClick={!status? onSubmit: onReset}>
        {!status? `Find Falcone`: `Start Again`}
      </Button>
    </div>
  );
}

export default App;
