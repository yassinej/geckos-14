import React from 'react';
import NavBar from '../components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
