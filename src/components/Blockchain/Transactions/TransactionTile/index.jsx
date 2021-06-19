import React from 'react';
import styles from './TransactionTile.module.css';
import {Form, Input, InputNumber} from 'antd';

const TransactionTile = ({onChange}) => {
  return (
    <div className={styles.container}>
      <Form labelCol={{span: 8}} wrapperCol={{span: 16}}>
        <Form.Item label="From" required={true} style={{margin: 4}}>
          <Input
            type="text"
            placeholder="Alice"
            onChange={(event) => {
              onChange({from: event.target.value});
            }}
          />
        </Form.Item>

        <Form.Item label="To" required={true} style={{margin: 4}}>
          <Input
            type="text"
            placeholder="Bob"
            onChange={(event) => {
              onChange({to: event.target.value});
            }}
          />
        </Form.Item>

        <Form.Item label="Amount" required={true} style={{margin: 4}}>
          <InputNumber
            type="number"
            placeholder="random"
            style={{width: '100%'}}
            onChange={(val) => {
              onChange({amount: val});
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransactionTile;
