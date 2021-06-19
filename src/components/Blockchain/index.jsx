import {sha256} from 'js-sha256';
import React, {useCallback, useState} from 'react';
import BlocksView from './BlocksView';
import ClearButton from './ClearButton';
import Transactions from './Transactions';

const Blockchain = () => {
  const [blocks, setBlocks] = useState([]);

  const addBlock = useCallback(
    (transactionsList) => {
      const prevHash =
        blocks.length === 0 ? 'none' : blocks[blocks.length - 1].hash;
      const timeStamp = Date.now().valueOf();
      const seed = JSON.stringify({
        prevHash: prevHash,
        timeStamp: timeStamp,
        transactionsList: transactionsList,
      });
      let nonce = 0;
      let hash = '';

      while (true) {
        hash = sha256(seed + nonce);
        if (hash[0] === '0') break;
        nonce += 1;
      }

      setBlocks(
        blocks.concat({
          prevHash: prevHash,
          timeStamp: timeStamp,
          transactionsList: transactionsList,
          nonce: nonce,
          hash: hash,
        })
      );
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
