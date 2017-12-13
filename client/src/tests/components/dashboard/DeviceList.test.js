import React from 'react';
import DeviceList from '../../../components/dashboard/DeviceList';

import { shallow } from 'enzyme';
const devices = [
  { name: 'device1', status: 'online', type: 'Thermometer' },
  { name: 'device2', status: 'offline', type: 'PhMeter' },
  { name: 'device3', status: 'offline', type: 'Thermometer' }
];
it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrDeviceLister = shallow(<DeviceList devices={devices} />);
  expect(toJson(wrDeviceLister)).toMatchSnapshot();
});