import React from 'react';
import styles from './BlocksView.module.css';
import BlockTile from './BlockTile';

const BlocksView = ({blocks = []}) => {
  return (
    <div className={styles.container}>
      {blocks.map((block, index) => (
        <BlockTile prevHash={block.prevHash}></BlockTile>
      ))}
    </div>
  );
};

export default BlocksView;
