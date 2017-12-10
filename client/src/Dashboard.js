import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import Chart from './Chart';

class Dashboard extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        static: true
      },
      {
        i: 'b',
        x: 1,
        y: 0,
        w: 3,
        h: 2,
        minW: 4,
        maxW: 6
      }
    ];
    return (
      <div>
        <h2>Dashboard Page</h2>
        <h3>Playing With React and D3</h3>
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">a</div>
          <div key="b">
            <Chart />
          </div>
        </ReactGridLayout>
      </div>
    );
  }
}

export default Dashboard;
