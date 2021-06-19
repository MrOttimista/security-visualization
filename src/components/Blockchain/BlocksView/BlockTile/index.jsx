import React, {useState} from 'react';
import styles from './BlockTile.module.css';
import GroundSign from './GroundSign';
import UpsideArrow from './UpsideArrow';
import {Modal} from 'antd';
import TransactionsTable from './TransactionsTable';

const BlockTile = ({prevHash, timeStamp, hash, transactionsList, nonce}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={styles.container}>
      {prevHash ? <UpsideArrow></UpsideArrow> : <GroundSign></GroundSign>}
      <div className={styles.block}>
        <p>prevHash: {prevHash ?? 'none'}</p>
        <p>timeStamp: {timeStamp}</p>
        <p className={styles.link} onClick={() => setIsModalVisible(true)}>
          Transactions (click to show)
        </p>
        <p>nonce: {nonce}</p>
        <p>hash: {hash}</p>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        cancelText
        centered
      >
        <h1>Transactions</h1>
        <TransactionsTable transactions={transactionsList}></TransactionsTable>
      </Modal>
    </div>
  );
};

export default BlockTile;
