import React from 'react';
import ThingAction from '../../../../components/dashboard/thing/ThingAction';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<ThingAction />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
