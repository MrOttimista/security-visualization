import React, {useCallback, useState} from 'react';
import BlocksView from './BlocksView';
import Transactions from './Transactions';

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = useCallback(
    (nextBlock) => {
      setBlocks((prev) =>
        prev.concat({
          ...nextBlock,
          prevHash: prev.length === 0 ? undefined : prev[prev.length - 1].hash,
        })
      );
    },
    [setBlocks]
  );

  return (
    <div style={{display: 'flex'}}>
      <Transactions addBlock={addBlock}></Transactions>
      <BlocksView blocks={blocks}></BlocksView>
    </div>
  );
};

export default Blockchain;
