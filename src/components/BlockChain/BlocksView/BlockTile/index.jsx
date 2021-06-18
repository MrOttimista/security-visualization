import React from 'react';
import styles from './BlockTile.module.css';
import GroundSign from './GroundSign';
import UpsideArrow from './UpsideArrow';

const BlockTile = ({prevHash} = {prevHash: undefined}) => {
  return (
    <div className={styles.container}>
      {prevHash ? <UpsideArrow></UpsideArrow> : <GroundSign></GroundSign>}
      <div className={styles.block}></div>
    </div>
  );
};

export default BlockTile;
