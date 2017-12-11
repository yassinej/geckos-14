import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../containers/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
