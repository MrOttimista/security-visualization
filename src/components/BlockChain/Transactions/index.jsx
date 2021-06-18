import {Button, Row} from 'antd';
import React, {useCallback, useState} from 'react';
import styles from './transactions.module.css';
import TransactionTile from './TransactionTile';

const Transactions = ({addBlock = () => {}}) => {
  const [transactionsList, setTransactionsList] = useState([]);

  const addTransaction = useCallback(
    (transaction) => {
      setTransactionsList((prev) => prev.concat(transaction));
    },
    [setTransactionsList]
  );

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
        <Button style={{margin: '10px'}} onClick={() => addTransaction({})}>
          Add transaction
        </Button>
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
