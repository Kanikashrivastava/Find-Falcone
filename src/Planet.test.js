import React from 'react';
import { render, cleanup, screen, prettyDOM } from '@testing-library/react';
import user from '@testing-library/user-event';
import { DestinationVehicleBook } from './Planet';
afterAll(() => {
  cleanup()
  jest.resetAllMocks()
})
test('renders planets options', async () => {
    const props = {
        optionNum: 1,
        planets: [{ name: 'Planet 1' }, { name: 'Planet 2' }],
        vehicles: [
            { name: 'Vehicles 1', total_no: 1 },
            { name: 'Vehicles 2', total_no: 2 }
        ]
    }
    const utils = render(<DestinationVehicleBook {...props} />);
    const { asFragment } = utils
    user.click(screen.getByTestId("planet-select"))
    user.selectOptions(screen.getByTestId(/planet-select/), [props.planets[0].name])
    expect(asFragment()).toMatchSnapshot()
});