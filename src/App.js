import React from 'react';
import { DestinationVehicleBook } from './Planet'
import { useToken, usePlanets, useVehicles } from './hooks';


function App() {
  const token = useToken();
  const planets = usePlanets();
  const vehicles = useVehicles();
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
