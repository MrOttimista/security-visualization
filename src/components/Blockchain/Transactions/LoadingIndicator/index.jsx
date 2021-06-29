import React from 'react';
import styles from './LoadingIndicator.module.css';

const LoadingIndicator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}></div>
      <h1>
        Creating block <span className={styles['three-dots']}></span>
      </h1>
    </div>
  );
};

export default LoadingIndicator;
