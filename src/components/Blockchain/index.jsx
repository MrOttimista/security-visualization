import React, {useCallback, useState} from 'react';
import hashUtil from '../../helpers/miner';
import BlocksView from './BlocksView';
import ClearButton from './ClearButton';
import Transactions from './Transactions';

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = useCallback(
    async (transactionsList) => {
      const prevHash =
        blocks.length === 0 ? undefined : blocks[blocks.length - 1].hash;
      const timeStamp = Date.now().valueOf();
      const seed = JSON.stringify({
        prevHash: prevHash,
        timeStamp: timeStamp,
        transactionsList: transactionsList,
      });

      let nonce = 0;
      let hash = 'xxxxxx';

      while (hash.slice(0, 2) !== '00') {
        hash = await hashUtil(seed, nonce);
        nonce += 1;
        setBlocks(
          blocks.concat({
            prevHash: prevHash,
            timeStamp: timeStamp,
            transactionsList: transactionsList,
            nonce: nonce,
            hash: hash,
          })
        );
      }
    },
    [blocks, setBlocks]
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
