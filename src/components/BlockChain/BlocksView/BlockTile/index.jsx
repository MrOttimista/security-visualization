import React from 'react';
import styles from './BlockTile.module.css';
import UpsideArrow from './UpsideArrow';

const BlockTile = () => {
  return (
    <div className={styles.container}>
      <UpsideArrow></UpsideArrow>
      <div className={styles.block}></div>
    </div>
  );
};

export default BlockTile;
