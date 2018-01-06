import React from 'react';

const ThingProperty = props => {
  // console.log('Device Component');
  return (
    <div className="thing-property">
      <div>{props.key}</div>
      <div className="thing-description">{props.description}</div>
    </div>
  );
};

export default ThingProperty;
