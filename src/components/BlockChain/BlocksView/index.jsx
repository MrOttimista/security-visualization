import React from 'react';
import styles from './BlocksView.module.css';
import BlockTile from './BlockTile';

const blocks = [{}, {prevHash: 'jkl'}, {prevHash: 'kjl'}, {prevHash: 'kjl'}];

const BlocksView = () => {
  return (
    <div className={styles.container}>
      {blocks.map((block, index) => (
        <BlockTile prevHash={block.prevHash}></BlockTile>
      ))}
    </div>
  );
};

export default BlocksView;
