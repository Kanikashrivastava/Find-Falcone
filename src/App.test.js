import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';
import { fetchPlanets, fetchToken, fetchVehicles } from './services'

jest.mock('./services.js')


describe('<App />', () => {
  beforeEach(() => {

    const token = 'sfgasdfdgdfg87afa868adfa'
    const planets = [
      { name: 'Planet 1' }, 
      { name: 'Planet 2' }, 
      { name: 'Planet 3' }, 
      { name: 'Planet 4' }
    ]
    const vehicles = [
      { name: 'Vehicles 1' }, 
      { name: 'Vehicles 2' }, 
      { name: 'Vehicles 3' }, 
      { name: 'Vehicles 4' }
    ]
    fetchToken.mockResolvedValue({ token })
    fetchPlanets.mockResolvedValue(planets)
    fetchVehicles.mockResolvedValue(vehicles)
  })
  afterEach(() => {
    fetchToken.mockClear();
    fetchPlanets.mockClear();
    fetchVehicles.mockClear();
  })
  test('should show the planets select in the UI', async () => {
    const { asFragment, getAllByTestId } = render(<App />);
    user.click(getAllByTestId("planet-select")[0])
    user.click(getAllByTestId("planet-select")[1])
    user.click(getAllByTestId("planet-select")[2])
    user.click(getAllByTestId("planet-select")[3])
    await waitForDomChange()
    expect(asFragment()).toMatchSnapshot()
  });

  test('should call token on load', async () => {
    const { rerender } = render(<App />);
    await waitForDomChange()
    expect(fetchToken).toHaveBeenCalledTimes(1)
    rerender(<App />)
    expect(fetchToken).toHaveBeenCalledTimes(1)
  });
});