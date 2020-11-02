---
nav:
  title: '组件'
group:
  title: 组件
  order: 2
title: EditTable
order: 0
---

# EditTable

## <span style="font-size:18px; color: #4569d4">使用</span>

```bash
$ npm i --save sula-register-components

import { EditTable } from 'sula-register-components'
registerFieldPlugin('editTable')(EditTable, true, true);
```

## <span style="font-size:18px; color: #4569d4">介绍</span>

描述: sula 体系内注册组件，直接在 sula json 内部使用。同时适配 form 的 mode 属性

```tsx
import React from 'react';
import { CreateForm } from 'sula';
import { message, Button } from 'antd';

export default () => {
  const config = {
    mode: 'create',
    layout: 'horizontal',
    itemLayout: {
      labelCol: {
        span: 2,
      },
    },
    container: {
      type: 'card',
      props: {
        className: 'div-class',
      },
    },
    fields: [
      {
        name: 'name',
        label: '姓名',
        itemLayout: {
          labelCol: {
            span: 2,
          },
          wrapperCol: {
            span: 10,
          },
        },
        field: {
          itemLayout: {
            labelCol: {
              span: 2,
            },
            wrapperCol: {
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
        name: 'tableData',
        label: '列表数据',
        itemLayout: {
          labelCol: {
            span: 2,
          },
          wrapperCol: {
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
              <Button
                type="primary"
                style={{
                  marginBottom: 16,
                  position: 'absolute',
                  right: '0',
                }}
              >
                添加一行
              </Button>
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
    actionsRender: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '提交',
        },
        action: [
          'validateFields',
          {
            url:
              'https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04/edit-table',
            method: 'post',
            params: ctx => {
              return ctx.result;
            },
          },
          () => {
            debugger;
          },
        ],
      },
    ],
  };

  return (
    <>
      <CreateForm {...config} />
    </>
  );
};
```

## <span style="font-size:18px; color: #4569d4">属性介绍</span>

```js
{
  name: 'tableData',
  label: '列表数据',
  itemLayout: {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
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
      addNode: <Button
                  type="primary"
                  style={{
                    marginBottom: 16,
                    position: 'absolute',
                    right: '0'
                  }}
                >
                  添加一行
                </Button>,
      formatMessage: () => {},
    },
  },
},
```

### <span style="font-size:16px; color: #EB2F96">type 类型</span>

```js
type: 'editTable',
```

### <span style="font-size:16px; color: #EB2F96">props 属性</span>

| 属性名                 | 说明                                                                                                                                                               | 类型              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| columns [`必选`]       | ant design table columns 属性 [ant deisgn table](https://ant.design/components/table-cn/#Column)，多了两个属性：`editable[是否可编辑]` 和 `isRequired[是否不为空]` | `any[]`           |
| size [`可选`]          | ant design table 的属性 [`可以透传 ant design table 的属性`]                                                                                                       | `string`          |
| addNode [`可选`]       | 用来自定义添加行的样式和位置                                                                                                                                       | `React.ReactNode` |
| formatMessage [`可选`] | 国际化方法                                                                                                                                                         | `function`        |

### <span style="font-size:16px; color: #EB2F96">addNode</span>

可选属性，不传入时，“添加按钮”则如下：

```tsx
import React from 'react';
import { CreateForm } from 'sula';
import { message, Button } from 'antd';

export default () => {
  const config = {
    mode: 'create',
    layout: 'horizontal',
    itemLayout: {
      labelCol: {
        span: 2,
      },
    },
    container: {
      type: 'card',
      props: {
        className: 'div-class',
      },
    },
    fields: [
      {
        name: 'tableData',
        label: '列表数据',
        itemLayout: {
          labelCol: {
            span: 2,
          },
          wrapperCol: {
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
            formatMessage: () => {},
          },
        },
      },
    ],
    remoteValues: {
      url: '/api/rule/getRuleByOne',
      method: 'get',
    },
    actionsRender: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '提交',
        },
        action: [
          'validateFields',
          {
            url:
              'https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04/edit-table',
            method: 'post',
            params: ctx => {
              return ctx.result;
            },
          },
          () => {
            debugger;
          },
        ],
      },
    ],
  };

  return (
    <>
      <CreateForm {...config} />
    </>
  );
};
```

### <span style="font-size:16px; color: #EB2F96">国际化</span>

这里的国际化分为两部分：

- columns 的表头：`表头的国际化则由开发人员适配`
- 按钮操作相关的，例如，添加按钮，action 列，删除记录的 confirm 消息

按钮操作相关的，如果不传入国际化方法则只有中文，因为这个组件不属于 ant design pro，也不属于 sula 自己内部注册的体系。只能通过外部传入的国际化方法进行适配一下。

locale 文件添加：

```js
  'sula-component.edit-table.action': '操作',
  'sula-component.edit-table.delete': '确认删除吗？',
  'sula-component.edit-table.addRow': '新增一行'
```

## <span style="font-size:18px; color: #4569d4">form 验证</span>

适配 sula form 的 required，添加 required 代码校验是否存在数据

```tsx
import React from 'react';
import { CreateForm } from 'sula';
import { message, Button } from 'antd';

export default () => {
  const config = {
    mode: 'create',
    layout: 'horizontal',
    itemLayout: {
      labelCol: {
        span: 2,
      },
    },
    container: {
      type: 'card',
      props: {
        className: 'div-class',
      },
    },
    fields: [
      {
        name: 'tableData',
        label: '列表数据',
        itemLayout: {
          labelCol: {
            span: 2,
          },
          wrapperCol: {
            span: 22,
          },
        },
        rules: [
          {
            required: true,
          },
        ],
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
            formatMessage: () => {},
          },
        },
      },
    ],
    remoteValues: {
      url: '/api/rule/getRuleByOne',
      method: 'get',
    },
    actionsRender: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '提交',
        },
        action: [
          'validateFields',
          {
            url:
              'https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04/edit-table',
            method: 'post',
            params: ctx => {
              return ctx.result;
            },
          },
          () => {
            debugger;
          },
        ],
      },
    ],
  };

  return (
    <>
      <CreateForm {...config} />
    </>
  );
};
```

### <span style="font-size:16px; color: #EB2F96">校验表格数据</span>

可以通过自定义验证

```js
import sula from 'sula/es/core';
// 校验字符串不存在空格
sula.validatorType('edit-table', ctx => {
  const { value, name } = ctx || {};
  const ErrorArray = [];
  value.forEach((row, index) => {
    Object.keys(row).forEach(cell => {
      if (!row[cell]) {
        ErrorArray.push(`第${index + 1}条数据不正确`);
      }
    });
  });

  if (ErrorArray.length) {
    return Promise.reject(ErrorArray[0]);
  }

  return Promise.resolve();
});
```

sula json 添加自定义校验

```js
rules: [
  {
    required: true,
  },
  {
    validator: 'edit-table',
  },
],
```

同时 columns 还可以传入一个字段 isRequired，进行单个字段是否启用为空的校验，但是这个校验只是组件内部的，和 sula 的 form required 没有直接的联系，可以通过自定义和 isRequired 组合进行校验

```tsx
import React from 'react';
import { CreateForm } from 'sula';
import { message, Button } from 'antd';

export default () => {
  const config = {
    mode: 'create',
    layout: 'horizontal',
    itemLayout: {
      labelCol: {
        span: 2,
      },
    },
    container: {
      type: 'card',
      props: {
        className: 'div-class',
      },
    },
    fields: [
      {
        name: 'tableData',
        label: '列表数据',
        itemLayout: {
          labelCol: {
            span: 2,
          },
          wrapperCol: {
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
                isRequired: true,
                editable: true,
              },
              {
                title: 'age',
                dataIndex: 'age',
                isRequired: true,
                editable: true,
              },
              {
                title: 'address',
                dataIndex: 'address',
                isRequired: true,
                editable: true,
              },
            ],
            formatMessage: () => {},
          },
        },
      },
    ],
    remoteValues: {
      url: '/api/rule/getRuleByOne',
      method: 'get',
    },
    actionsRender: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '提交',
        },
        action: [
          'validateFields',
          {
            url:
              'https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04/edit-table',
            method: 'post',
            params: ctx => {
              return ctx.result;
            },
          },
          () => {
            debugger;
          },
        ],
      },
    ],
  };

  return (
    <>
      <CreateForm {...config} />
    </>
  );
};
```
