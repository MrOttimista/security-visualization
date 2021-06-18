import {Button, Row} from 'antd';
import React from 'react';
import styles from './transactions.module.css';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h1>Unconfirmed Transactions</h1>
      <div className={styles['transactions-list']}></div>
      <Row>
        <Button style={{margin: '10px'}}>Add transaction</Button>
        <Button style={{margin: '10px'}}>Add block</Button>
      </Row>
    </div>
  );
};

export default Transactions;
