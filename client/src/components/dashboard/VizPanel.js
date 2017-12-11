import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

import Chart from '../../components/d3/Chart';

class VizPanel extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {
        i: 'a',
        x: 0,
        y: 0,
        w: 6,
        h: 8,
        minW: 6,
        maxW: 6
      },
      {
        i: 'b',
        x: 1,
        y: 0,
        w: 6,
        h: 8,
        minW: 6,
        maxW: 6
      }
    ];
    return (
      <div className="viz-panel">
        <div>VizActionPanel</div>

        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1000}>
          <div key="a">
            <Chart />
          </div>
          <div key="b">
            <Chart />
          </div>
        </ReactGridLayout>
      </div>
    );
  }
}

export default VizPanel;
