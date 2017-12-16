import React from 'react';
import VizGrid from './VizGrid';
import ControlPanel from './ControlPanel';

const VizPanel = props => {
  console.log(props);
  return (
    <div className="viz-panel">
      <ControlPanel actions={props.actions} />
      <VizGrid vizs={props.vizs} />
    </div>
  );
};

export default VizPanel;
