import React from 'react';
import ReactDOM from 'react-dom';
import VizPanel from '../../../components/dashboard/VizPanel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VizPanel />, div);
});
