import React from 'react';
import GetStarted from '../components/GetStarted';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<GetStarted />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
