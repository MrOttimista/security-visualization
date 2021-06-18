import React from 'react';
import styles from './BlocksView.module.css';
import BlockTile from './BlockTile';

const blocks = ['', '', ''];

const BlocksView = () => {
  return (
    <div className={styles.container}>
      {blocks.map((block, index) => (
        <BlockTile></BlockTile>
      ))}
    </div>
  );
};

export default BlocksView;
