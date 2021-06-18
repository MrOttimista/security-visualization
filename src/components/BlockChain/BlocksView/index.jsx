import React from 'react';
import styles from './BlocksView.module.css';
import BlockTile from './BlockTile';

const BlocksView = ({blocks = []}) => {
  /* TODO: change key to block hash */

  return (
    <div className={styles.container}>
      {blocks.map((block, index) => (
        <React.Fragment key={index}>
          <BlockTile prevHash={block.prevHash}></BlockTile>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlocksView;
