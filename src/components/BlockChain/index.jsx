import React, {useCallback, useState} from 'react';
import BlocksView from './BlocksView';
import ClearButton from './ClearButton';
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

  const clearBlocks = useCallback(() => setBlocks([]), [setBlocks]);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <Transactions addBlock={addBlock}></Transactions>
      <BlocksView blocks={blocks}></BlocksView>
      <ClearButton onClick={clearBlocks}></ClearButton>
    </div>
  );
};

export default Blockchain;
