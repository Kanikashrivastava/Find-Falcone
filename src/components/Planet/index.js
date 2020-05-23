import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    fontSize: 21,
    padding: '21px',
  }
}));

export function DestinationVehicleBook({ optionNum, planets, vehicles }) {
  const classes = useStyles();
  const [selectedPlanet, setSelectedPlanet] = useState('default')
  const [selectedVechile, setSelectedVechile] = useState('default')
  const isPlanetSelected = () => {
    return selectedPlanet && selectedPlanet !== 'default'
  }
  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <label id="demo-simple-select-label">Destination {optionNum}</label>
        <select
          id="planet-select"
          data-testId="planet-select"
          value={selectedPlanet}
          className={classes.select}
          onChange={(e) => setSelectedPlanet(e.target.value)}
        >
          <option value="default">Select Planet</option>
          {planets.map((planet) => {
            return <option value={planet.name}>{planet.name}</option>
          })}
        </select>
        {isPlanetSelected() &&
          (
            <RadioGroup 
              aria-label="vehicles" 
              name="vehicles" 
              value={selectedVechile} 
              onChange={
                (e) => setSelectedVechile(e.target.value)
              }
            >
              {vehicles.map((vehicle) => {
                return (
                  <FormControlLabel value={vehicle.name} control={<Radio />} label={`${vehicle.name.toUpperCase()} (${vehicle.total_no})`} />
                )
              })}
            </RadioGroup>
          )
        }
      </FormControl>
    </>
  )
}