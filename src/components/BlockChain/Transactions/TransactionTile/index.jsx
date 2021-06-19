import React from 'react';
import styles from './TransactionTile.module.css';
import { Form, Input, InputNumber } from "antd";


const TransactionTile = ({ transaction = {} }) => {

  return <div className={styles.container}>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>

      <Form.Item label="From" required={true} style={{ margin: 4 }}>
        <Input type="text"></Input>
      </Form.Item>
      <Form.Item label="To" required={true} style={{ margin: 4 }}>
        <Input type="text"></Input>
      </Form.Item>
      <Form.Item label="Amount" required={true} style={{ margin: 4 }}>
        <InputNumber type="number" style={{ width: "100%" }}></InputNumber>
      </Form.Item>

    </Form>
  </div >;
};

export default TransactionTile;
