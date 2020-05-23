import React from 'react';
import { DestinationVehicleBook } from './Planet'
import { useToken, usePlanets } from './hooks';


function App() {
  const token = useToken();
  const planets = usePlanets();
  const vehicles = [
    { name: 'Vehicles 1', total_no: 1 }, 
    { name: 'Vehicles 2', total_no: 2 }, 
    { name: 'Vehicles 3', total_no: 1 }, 
    { name: 'Vehicles 4', total_no: 1 }
  ];
  return (
    <div className="App">
      <header className="App-header">
        Find Falcone
      </header>
      <DestinationVehicleBook optionNum="1" planets={planets} vehicles={vehicles} />
      <DestinationVehicleBook optionNum="2" planets={planets} vehicles={vehicles} />
      <DestinationVehicleBook optionNum="3" planets={planets} vehicles={vehicles} />
      <DestinationVehicleBook optionNum="4" planets={planets} vehicles={vehicles} />
    </div>
  );
}

export default App;
