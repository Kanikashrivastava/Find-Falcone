import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    padding: "21px",
  },
}));

export function DestinationVehicleBook({ optionNum, planets, vehicles }) {
  const classes = useStyles();
  const [selectedPlanet, setSelectedPlanet] = useState("default");
  const [selectedVechile, setSelectedVechile] = useState("default");
  const isPlanetSelected = () => {
    return selectedPlanet && selectedPlanet !== "default";
  };
  return (
    <>
      <FormControl variant="filled" className={classes.formControl}>
        <label id="demo-simple-select-label">Destination {optionNum}</label>
        <select
          id="planet-select"
          data-testId="planet-select"
          className={classes.select}
        >
          {[{name: "default", distance: 0}, ...planets].map((planet) => {
            return (
              <option
                data-testId={planet.name}
                onClick={(e) => setSelectedPlanet(planet.name)}
                value={planet.name}
                selected={selectedPlanet === planet.name}
              >
                {planet.name === 'default'? 'Select Planet': planet.name}
              </option>
            );
          })}
        </select>
        {isPlanetSelected() && (
          <RadioGroup
            aria-label="vehicles"
            name="vehicles"
            value={selectedVechile}
            onChange={(e) => setSelectedVechile(e.target.value)}
          >
            {vehicles.map((vehicle) => {
              return (
                <FormControlLabel
                  value={vehicle.name}
                  control={<Radio />}
                  label={`${vehicle.name.toUpperCase()} (${vehicle.total_no})`}
                />
              );
            })}
          </RadioGroup>
        )}
      </FormControl>
    </>
  );
}
