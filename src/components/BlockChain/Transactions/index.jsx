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

      {/* render area for transactions */}
      <div ref={scrollableDivRef} className={styles['transactions-list']}>
        {transactionsList.length === 0 ? (
          <div className={styles['no-transactions']}>No transactions added</div>
        ) : (
          transactionsList.map((transaction, index) => (
            <React.Fragment key={index}>
              <TransactionTile transaction={transaction}></TransactionTile>
            </React.Fragment>
          ))
        )}
      </div>

      {/* option buttons */}
      <Row>
        {/* TODO: add proper transaction */}
        <Button style={{margin: '10px'}} onClick={() => addTransaction({})}>
          Add transaction
        </Button>
        <Button
          style={{margin: '10px'}}
          disabled={!transactionsList.length}
          title={
            !transactionsList.length
              ? 'You must add transactions first'
              : undefined
          }
          onClick={() => {
            addBlock({
              hash: 'temp',
              timeStamp: Date.now().valueOf(),
              transactionsList: transactionsList,
            });

            setTransactionsList([]);
          }}
        >
          Add block
        </Button>
      </Row>
    </div>
  );
};

export default Transactions;
