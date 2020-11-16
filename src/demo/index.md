---
nav:
  title: 'demo'
  order: 4
group:
  title: demo
  order: 4
title: demo
order: 0
---

# Demo

## <span style="font-size:18px; color: #4569d4">table</span>

```jsx
import React from 'react';
import { Table, request } from 'sula';

export default () => {
  const config = {
    remoteDataSource: {
      url: 'http://192.168.10.205:8080/sysuser',
      header: {
        'x-tenant-id': 2,
      },
      method: 'GET',
      convertParams({ params }) {
        return {
          pageSize: params.pageSize || 10,
          currentPage: params.current || 1,
        };
      },
      converter({ data }) {
        return {
          list: data.list,
          total: data.totalCount,
        };
      },
    },
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'username',
        title: '姓名',
      },
      {
        key: 'gender',
        title: '性别',
        render: ({ text }) => {
          return text === 'male' ? '男' : '女';
        },
      },
      {
        key: 'headImg',
        title: '头像',
        render: ({ text }) => {
          return <img style={{ height: '50px' }} src={text} />;
        },
      },
    ],
    rowKey: 'id',
  };
  return <Table {...config} />;
};
```
