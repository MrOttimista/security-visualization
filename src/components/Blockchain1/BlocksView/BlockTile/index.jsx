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
        <p>transactions</p>
        <p>hash: {hash}</p>
      </div>
    </div>
  );
};

export default BlockTile;
