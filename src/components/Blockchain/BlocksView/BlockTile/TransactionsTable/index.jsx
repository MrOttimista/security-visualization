import React, {useMemo} from 'react';
import {Table} from 'antd';

const TransactionsTable = ({transactions = []}) => {
  const columns = useMemo(
    () =>
      Object.keys(transactions[0]).map((key, index) => {
        return {title: key, dataIndex: key, key: key};
      }),
    [transactions]
  );

  return (
    <Table
      columns={columns}
      dataSource={transactions}
      size="large"
      pagination={{pageSize: 5}}
      bordered
    ></Table>
  );
};

export default TransactionsTable;
