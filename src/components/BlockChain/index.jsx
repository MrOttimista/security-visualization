import React, {useState} from 'react';
import BlocksView from './BlocksView';
import Transactions from './Transactions';

const initialBlocks = [
  {},
  {prevHash: 'jkl'},
  {prevHash: 'kjl'},
  {prevHash: 'kjl'},
];

const Blockchain = () => {
  const [blocks, setBlocks] = useState(initialBlocks);

  return (
    <div style={{display: 'flex'}}>
      <Transactions></Transactions>
      <BlocksView blocks={blocks}></BlocksView>
    </div>
  );
};

export default Blockchain;
