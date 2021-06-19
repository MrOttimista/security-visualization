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

  const editTransaction = (index, transactionData) => {
    const newTransactions = transactionsList.concat();
    newTransactions[index] = {...newTransactions[index], ...transactionData};
    setTransactionsList(newTransactions);
  };

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
          transactionsList.map((_, index) => (
            <React.Fragment key={index}>
              <TransactionTile
                onChange={(from, to, amount) => {
                  console.log(from);
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
          style={{margin: '10px'}}
          disabled={!transactionsList.length}
          title={
            !transactionsList.length
              ? 'You must add transactions first'
              : undefined
          }
          onClick={() => {
            console.log(transactionsList);
            addBlock({
              hash: 'temp',
              timeStamp: Date.now().valueOf(),
              transactionsList: transactionsList,
              nonce: 'temp',
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
