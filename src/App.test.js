import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { fetchPlanets } from './services'

jest.mock('./services.js')

fetchPlanets.mockResolvedValue([
  
])

test('renders learn react link', () => {
  const { asFragment, getAllByTestId} = render(<App />);
  fireEvent.click(getAllByTestId("planet-select")[0])
  fireEvent.click(getAllByTestId("planet-select")[1])
  fireEvent.click(getAllByTestId("planet-select")[2])
  fireEvent.click(getAllByTestId("planet-select")[3])
  expect(asFragment()).toMatchSnapshot()
});

