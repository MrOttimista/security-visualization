import React from 'react';
import BlocksView from './BlocksView';
import Transactions from './Transactions';

const Blockchain = () => {
  return (
    <>
      <Transactions></Transactions>
      <BlocksView></BlocksView>
    </>
  );
};

export default Blockchain;
