import {Button, Row} from 'antd';
import React, {useCallback, useRef, useState, useEffect} from 'react';
import styles from './transactions.module.css';
import TransactionTile from './TransactionTile';

const Transactions = ({addBlock = () => {}}) => {
  const [transactionsList, setTransactionsList] = useState([]);
  const scrollableDivRef = useRef(null);

  const addTransaction = useCallback(
    (transaction) => {
      setTransactionsList((prev) => prev.concat(transaction));
    },
    [setTransactionsList]
  );

  // side effect for scrolling down after blcok addition
  useEffect(() => {
    if (!scrollableDivRef.current) return;

    scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
  }, [transactionsList, scrollableDivRef]);

  return (
    <div className={styles.container}>
      <h1>Transactions</h1>
      <div ref={scrollableDivRef} className={styles['transactions-list']}>
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
