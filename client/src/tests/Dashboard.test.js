import React from 'react';
import Dashboard from '../components/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<Dashboard />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
