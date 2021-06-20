import React from 'react';

const UpsideArrow = () => {
  return (
    <svg height="100" width="25">
      <polygon points="0,25 25,25 12.5,0"></polygon>
      <line
        x1="12.5"
        x2="12.5"
        y1="25"
        y2="100"
        style={{stroke: 'black', strokeWidth: '5'}}
      ></line>
    </svg>
  );
};

export default UpsideArrow;
