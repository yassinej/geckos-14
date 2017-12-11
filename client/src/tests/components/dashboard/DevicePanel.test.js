import React from 'react';
import ReactDOM from 'react-dom';
import DevicePanel from '../../../components/dashboard/DevicePanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DevicePanel />, div);
});
