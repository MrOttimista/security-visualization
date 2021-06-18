import React from 'react';
import BlocksView from './BlocksView';
import Transactions from './Transactions';

const Blockchain = () => {
  return (
    <div style={{display: 'flex'}}>
      <Transactions></Transactions>
      <BlocksView></BlocksView>
    </div>
  );
};

export default Blockchain;
