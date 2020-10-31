---
group:
  title: 组件
  order: 2
title: EditTable
order: 0
---

## EditTable

描述:

```tsx
import React from 'react';
import { CreateForm } from 'sula';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import access from '@/components/access';
import '../../plugins';

export default () => {
  const config = {
    mode: 'create',
    layout: 'horizontal',
    itemLayout: {
      labelCol: {
        // label标签布局；可设置 span、offset
        span: 2,
      },
    },
    container: {
      type: 'card',
      props: {
        /*  */
        className: 'div-class',
      },
    },
    fields: [
      {
        name: 'name',
        label: '姓名',
        itemLayout: {
          labelCol: {
            // label标签布局；可设置 span、offset
            span: 2,
          },
          wrapperCol: {
            // value布局, 方式同labelCol（horizontal状态下配置）
            span: 10,
          },
        },
        field: {
          itemLayout: {
            labelCol: {
              // label标签布局；可设置 span、offset
              span: 2,
            },
            wrapperCol: {
              // value布局, 方式同labelCol（horizontal状态下配置）
              span: 10,
            },
          },
          type: 'input',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'profession',
        label: '产品',
        itemLayout: {
          labelCol: {
            // label标签布局；可设置 span、offset
            span: 2,
          },
          wrapperCol: {
            // value布局, 方式同labelCol（horizontal状态下配置）
            span: 10,
          },
        },
        field: {
          type: 'input',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'rooms',
        label: '是否上线',
        valuePropName: 'checked',
        itemLayout: {
          labelCol: {
            // label标签布局；可设置 span、offset
            span: 2,
          },
          wrapperCol: {
            // value布局, 方式同labelCol（horizontal状态下配置）
            span: 10,
          },
        },
        field: 'switch',
      },
      {
        name: 'tableData',
        label: '列表数据',
        itemLayout: {
          labelCol: {
            // label标签布局；可设置 span、offset
            span: 2,
          },
          wrapperCol: {
            // value布局, 方式同labelCol（horizontal状态下配置）
            span: 22,
          },
        },
        field: {
          type: 'editTable',
          props: {
            size: 'small',
            columns: [
              {
                title: 'name',
                dataIndex: 'name',
                width: '30%',
                editable: true,
              },
              {
                title: 'age',
                dataIndex: 'age',
                editable: true,
              },
              {
                title: 'address',
                dataIndex: 'address',
                editable: true,
              },
            ],
            addNode: (
              <div style={{ textAlign: 'right' }}>
                <Button
                  type="primary"
                  style={{
                    marginBottom: 16,
                  }}
                >
                  添加一行
                </Button>
              </div>
            ),
            formatMessage: () => {},
          },
        },
      },
    ],
    remoteValues: {
      url: '/api/rule/getRuleByOne',
      method: 'get',
    },
    submit: {
      url: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
      method: 'POST',
    },
  };

  return (
    <>
      <CreateForm {...config} />
    </>
  );
};
```
