import {Button, Row} from 'antd';
import React, {useCallback, useRef, useState, useEffect} from 'react';
import LoadingIndicator from './LoadingIndicator';
import styles from './transactions.module.css';
import TransactionTile from './TransactionTile';

const Transactions = ({addBlock = () => {}}) => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollableDivRef = useRef(null);

  const addTransaction = useCallback(
    (transaction) => {
      setTransactionsList((prev) => prev.concat(transaction));
    },
    [setTransactionsList]
  );

  const editTransaction = (index, transactionData) => {
    transactionsList[index] = {...transactionsList[index], ...transactionData};
  };

  // side effect for scrolling down after blcok addition
  useEffect(() => {
    if (!scrollableDivRef.current) return;

    scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
  }, [transactionsList.length, scrollableDivRef]);

  return (
    <div className={styles.container}>
      <h1>Transactions</h1>

      {/* render area for transactions */}
      <div ref={scrollableDivRef} className={styles['transactions-list']}>
        {loading ? (
          <LoadingIndicator></LoadingIndicator>
        ) : transactionsList.length === 0 ? (
          <div className={styles['no-transactions']}>Add transactions</div>
        ) : (
          transactionsList.map((_, index) => (
            <React.Fragment key={index}>
              <TransactionTile
                onChange={(from, to, amount) => {
                  editTransaction(index, from, to, amount);
                }}
              ></TransactionTile>
            </React.Fragment>
          ))
        )}
      </div>

      {/* option buttons */}
      <Row>
        {/* TODO: add proper transaction */}
        <Button
          style={{margin: '10px'}}
          loading={loading}
          onClick={() =>
            addTransaction({
              from: 'Alice',
              to: 'Bob',
              amount: Math.random() * 10,
            })
          }
        >
          Add transaction
        </Button>
        <Button
          loading={loading}
          style={{margin: '10px'}}
          disabled={!transactionsList.length}
          title={
            !transactionsList.length
              ? 'You must add transactions first'
              : undefined
          }
          onClick={async () => {
            setLoading(true);
            await addBlock(transactionsList);
            setTransactionsList([]);
            setLoading(false);
          }}
        >
          Add block
        </Button>
      </Row>
    </div>
  );
};

export default Transactions;
