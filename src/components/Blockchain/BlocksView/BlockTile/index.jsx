import React from 'react';
import styles from './BlockTile.module.css';
import GroundSign from './GroundSign';
import UpsideArrow from './UpsideArrow';

const BlockTile = ({prevHash, timeStamp, hash, transactionsList}) => {
  return (
    <div className={styles.container}>
      {prevHash ? <UpsideArrow></UpsideArrow> : <GroundSign></GroundSign>}
      <div className={styles.block}>
        <p>prevHash: {prevHash ?? 'none'}</p>
        <p>timeStamp: {timeStamp}</p>
        <p>{transactionsString(transactionsList)}</p>
        <p>hash: {hash}</p>
      </div>
    </div>
  );
};

const transactionsString = (transactionsList) =>
  transactionsList.map((item) =>
    <div>
      {item.from} to {item.to} = {item.amount}
    </div>
  );

export default BlockTile;
