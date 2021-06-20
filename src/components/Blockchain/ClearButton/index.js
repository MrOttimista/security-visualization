import React from 'react';
import styles from './ClearButton.module.css';

const ClearButton = ({onClick = () => {}}) => {
  return (
    <div className={styles.container} onClick={() => onClick()}>
      Clear
    </div>
  );
};

export default ClearButton;
