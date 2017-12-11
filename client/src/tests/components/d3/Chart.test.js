import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../../components/d3/Chart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chart />, div);
});
