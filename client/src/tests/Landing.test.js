import React from 'react';
import Landing from '../components/Landing';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<Landing />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
