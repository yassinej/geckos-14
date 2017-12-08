import React from 'react';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<Footer />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
