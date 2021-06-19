import React, {useEffect, useRef} from 'react';
import styles from './BlocksView.module.css';
import BlockTile from './BlockTile';

const BlocksView = ({blocks = []}) => {
  const containerRef = useRef(null);

  // side effect for scrolling down after blcok addition
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [blocks, containerRef]);

  /* TODO: change key to block hash */

  return (
    <div ref={containerRef} className={styles.container}>
      {blocks.map((block, index) => (
        <React.Fragment key={index}>
          <BlockTile {...block}></BlockTile>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BlocksView;
