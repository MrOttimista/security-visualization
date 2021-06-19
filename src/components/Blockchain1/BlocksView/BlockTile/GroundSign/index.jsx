import React from 'react';

const GroundSign = () => {
  return (
    <svg height="50" width="40">
      <line
        x1="15"
        x2="25"
        y1="5"
        y2="5"
        style={{stroke: 'black', strokeWidth: '5'}}
      ></line>
      <line
        x1="10"
        x2="30"
        y1="15"
        y2="15"
        style={{stroke: 'black', strokeWidth: '5'}}
      ></line>
      <line
        x1="0"
        x2="40"
        y1="25"
        y2="25"
        style={{stroke: 'black', strokeWidth: '5'}}
      ></line>

      <line
        x1="20"
        x2="20"
        y1="25"
        y2="50"
        style={{stroke: 'black', strokeWidth: '5'}}
      ></line>
    </svg>
  );
};

export default GroundSign;
