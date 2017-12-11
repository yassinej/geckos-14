import React from 'react';
import App from '../../containers/App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
