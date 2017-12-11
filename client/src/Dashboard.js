import React, { Component } from 'react';

import VizPanel from './components/dashboard/VizPanel';
import DevicePanel from './components/dashboard/DevicePanel';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <DevicePanel />
        <VizPanel />
      </div>
    );
  }
}

export default Dashboard;
