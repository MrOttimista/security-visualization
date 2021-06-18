import {Button, Row} from 'antd';
import React, {useState} from 'react';
import styles from './transactions.module.css';
import TransactionTile from './TransactionTile';

const Transactions = ({addBlock = () => {}}) => {
  const [transactionsList, setTransactionsList] = useState([]);

  return (
    <div className={styles.container}>
      <h1>Transactions</h1>
      <div className={styles['transactions-list']}>
        {transactionsList.map((transaction, index) => (
          <React.Fragment key={index}>
            <TransactionTile transaction={transaction}></TransactionTile>
          </React.Fragment>
        ))}
      </div>
      <Row>
        <Button style={{margin: '10px'}}>Add transaction</Button>
        <Button
          style={{margin: '10px'}}
          onClick={() =>
            addBlock({
              hash: 'temp',
              timeStamp: Date.now().valueOf(),
              transactionsList: [],
            })
          }
        >
          Add block
        </Button>
      </Row>
    </div>
  );
};

export default Transactions;
