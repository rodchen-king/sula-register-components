---
nav:
  title: '动态表单'
  order: 3
group:
  title: 动态表单
  order: 3
title: 动态表单
order: 0
---

# sula-dynamic-form

## <span style="font-size:18px; color: #4569d4">umi 体系使用</span>

```bash
$ cnpm i --save sula-dynamic-form@1.1.0

import { DynamicForm } from 'sula-dynamic-form';
```

### <span style="font-size:16px; color: #EB2F96">和 sula 现有的 json 不同的地方</span>

这里的 actionsRender 分别对应三种页面模式，create，edit，view。当在不同模式下，按钮是不同的，主要是业务场景下，不同的模下，操作按钮以及 api 是有所不同的。具体的可以看使用地方的展示。

```js
"actionsRender": {
    "create": [
      {
        "type": "button",
        "props": {
          "type": "primary",
          "children": "提交"
        },
        "action": [
          "validateFields",
          {
            "url": "https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5",
            "method": "POST"
          }
        ]
      },
      {
        "type": "button",
        "props": {
          "type": "primary",
          "children": "返回"
        },
        "action": "back"
      }
    ],
    "edit": [
      {
        "type": "button",
        "props": {
          "type": "primary",
          "children": "更新"
        },
        "action": [
          "validateFields",
          {
            "url": "https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5",
            "method": "POST"
          }
        ]
      },
      {
        "type": "button",
        "props": {
          "type": "primary",
          "children": "返回"
        },
        "action": "back"
      }
    ],
    "view": [
      {
        "type": "button",
        "props": {
          "type": "primary",
          "children": "返回"
        },
        "action": "back"
      }
    ]
  }
```

<br>

```tsx
import React from 'react';
import { DynamicForm } from 'sula-dynamic-form';

const config = {
  mode: 'create',
  container: {
    type: 'div',
    props: {
      style: {
        background: '#fff',
        padding: '24px',
        borderRadius: 2,
        margin: '0 auto 72px',
        maxWidth: 1000,
      },
    },
  },
  itemLayout: {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 8,
    },
  },
  fields: [
    {
      name: 'senderName',
      label: '发送人姓名',
      field: {
        type: 'input',
        props: {
          placeholder: '请输入发送人姓名',
        },
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'secrecy',
      label: '是否保密',
      field: {
        type: 'switch',
        props: {
          checkedChildren: 'on',
          unCheckedChildren: 'off',
        },
      },
      valuePropName: 'checked',
    },
    {
      name: 'senderNumber',
      label: '发送人号码',
      field: {
        type: 'inputnumber',
        props: {
          placeholder: '请输入发送人号码',
          style: {
            width: '80%',
          },
        },
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'senderAddress',
      label: '发送人地址',
      field: {
        type: 'textarea',
        props: {
          placeholder: '发送人地址',
        },
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'recipientName',
      label: '接收人姓名',
      field: {
        type: 'select',
        props: {
          placeholder: '请选择接收人姓名',
        },
      },
      remoteSource: {
        url:
          'https://www.fastmock.site/mock/c34b6d8a0f17200eb13d75100bed05c5/sula-demo/api/manage/recipientList',
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'recipientTime',
      label: '接收时间',
      field: {
        type: 'checkboxgroup',
      },
      initialSource: [
        {
          text: 'Morning',
          value: 'morning',
        },
        {
          text: 'Afternoon',
          value: 'afternoon',
        },
        {
          text: 'Night',
          value: 'night',
        },
      ],
    },
    {
      name: 'recipientNumber',
      label: '接收人号码',
      field: {
        type: 'inputnumber',
        props: {
          placeholder: '请输入接收人号码',
          style: {
            width: '80%',
          },
        },
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'recipientAddress',
      label: '接收人地址',
      field: {
        type: 'textarea',
        props: {
          placeholder: '请输入接收人地址',
        },
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'time',
      label: '送货时间',
      field: {
        type: 'rangepicker',
        props: {
          placeholder: ['开始时间', '结束时间'],
        },
      },
      rules: [
        {
          required: true,
          message: '该项为必填项',
        },
      ],
    },
    {
      name: 'priceProject',
      label: '价格保护',
      field: {
        type: 'slider',
        props: {
          min: 0,
          max: 1000,
          step: 100,
          dots: true,
        },
      },
      remoteSource: {
        url: '/api/manage/priceList.json',
      },
    },
    {
      name: 'description',
      label: '其他信息',
      field: {
        type: 'textarea',
        props: {
          placeholder: '请输入其他信息',
        },
      },
    },
  ],
  actionsRender: {
    create: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '提交',
        },
        action: [
          'validateFields',
          {
            url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
            method: 'POST',
          },
        ],
      },
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '返回',
        },
        action: 'back',
      },
    ],
    edit: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '更新',
        },
        action: [
          'validateFields',
          {
            url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
            method: 'POST',
          },
        ],
      },
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '返回',
        },
        action: 'back',
      },
    ],
    view: [
      {
        type: 'button',
        props: {
          type: 'primary',
          children: '返回',
        },
        action: 'back',
      },
    ],
  },
  remoteValues: {
    url:
      'https://www.fastmock.site/mock/c34b6d8a0f17200eb13d75100bed05c5/sula-demo/api/manage/detail',
    method: 'post',
    params: {
      id: 19,
    },
  },
};

export default props => {
  const callback = value => {
    console.log(value);
  };

  return <DynamicForm {...config} callback={callback} />;
};
```

### <span style="font-size:16px; color: #EB2F96">属性</span>

| 属性名   | 说明                                                                                   | 类型       |
| -------- | -------------------------------------------------------------------------------------- | ---------- |
| config   | sula form 的原有 config 配置                                                           | `object`   |
| callback | 这里添加的保存按钮的回掉函数，用于将当前 form 的 config 配置数据回掉回来，用于数据操作 | `function` |

## <span style="font-size:18px; color: #4569d4">非 umi 体系使用</span>

`这里主要是处理umi-plugin-sula做的事情，做一些sula的初始化工作`

```bash
$ cnpm i --save sula-dynamic-form@1.0.1

import { SulaDynamicFormFC } from 'sula-dynamic-form';
const DynamicForm = SulaDynamicFormFC();
```

`提示：react的版本不要用17.0，我用create-react-app创建的项目是17.0，会报冲突，然后我用的是16.12.0可以。16.13的也可以`

## <span style="font-size:18px; color: #4569d4">如何在具体的业务页面使用</span>

这里因为产生的 json 不是正常匹配的 sula json，所以需要做一个方法处理。处理不同的模式的数据。需要过滤数据产生正常的 sula json。

```tsx
import React from 'react';
import { CreateForm } from 'sula';
import handleDynamicFormData from './handleDynamicFormData';
import ModeSwitcher from './ModeSwitcher';

export default () => {
  const [mode, setMode] = React.useState('create');
  const config = {
    mode: mode,
    container: {
      type: 'div',
      props: {
        style: {
          background: '#fff',
          padding: '24px',
          borderRadius: 2,
          margin: '0 auto 72px',
          maxWidth: 1000,
        },
      },
    },
    itemLayout: {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 8,
      },
    },
    fields: [
      {
        name: 'senderName',
        label: '发送人姓名',
        field: {
          type: 'input',
          props: {
            placeholder: '请输入发送人姓名',
          },
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'secrecy',
        label: '是否保密',
        field: {
          type: 'switch',
          props: {
            checkedChildren: 'on',
            unCheckedChildren: 'off',
          },
        },
        valuePropName: 'checked',
      },
      {
        name: 'senderNumber',
        label: '发送人号码',
        field: {
          type: 'inputnumber',
          props: {
            placeholder: '请输入发送人号码',
            style: {
              width: '80%',
            },
          },
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'senderAddress',
        label: '发送人地址',
        field: {
          type: 'textarea',
          props: {
            placeholder: '发送人地址',
          },
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'recipientName',
        label: '接收人姓名',
        field: {
          type: 'select',
          props: {
            placeholder: '请选择接收人姓名',
          },
        },
        remoteSource: {
          url:
            'https://www.fastmock.site/mock/c34b6d8a0f17200eb13d75100bed05c5/sula-demo/api/manage/recipientList',
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'recipientTime',
        label: '接收时间',
        field: {
          type: 'checkboxgroup',
        },
        initialSource: [
          {
            text: 'Morning',
            value: 'morning',
          },
          {
            text: 'Afternoon',
            value: 'afternoon',
          },
          {
            text: 'Night',
            value: 'night',
          },
        ],
      },
      {
        name: 'recipientNumber',
        label: '接收人号码',
        field: {
          type: 'inputnumber',
          props: {
            placeholder: '请输入接收人号码',
            style: {
              width: '80%',
            },
          },
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'recipientAddress',
        label: '接收人地址',
        field: {
          type: 'textarea',
          props: {
            placeholder: '请输入接收人地址',
          },
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'time',
        label: '送货时间',
        field: {
          type: 'rangepicker',
          props: {
            placeholder: ['开始时间', '结束时间'],
          },
        },
        rules: [
          {
            required: true,
            message: '该项为必填项',
          },
        ],
      },
      {
        name: 'priceProject',
        label: '价格保护',
        field: {
          type: 'slider',
          props: {
            min: 0,
            max: 1000,
            step: 100,
            dots: true,
          },
        },
        remoteSource: {
          url: '/api/manage/priceList.json',
        },
      },
      {
        name: 'description',
        label: '其他信息',
        field: {
          type: 'textarea',
          props: {
            placeholder: '请输入其他信息',
          },
        },
      },
    ],
    actionsRender: {
      create: [
        {
          type: 'button',
          props: {
            type: 'primary',
            children: '提交',
          },
          action: [
            'validateFields',
            {
              url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
              method: 'POST',
            },
          ],
        },
        {
          type: 'button',
          props: {
            type: 'primary',
            children: '返回',
          },
          action: 'back',
        },
      ],
      edit: [
        {
          type: 'button',
          props: {
            type: 'primary',
            children: '更新',
          },
          action: [
            'validateFields',
            {
              url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
              method: 'POST',
            },
          ],
        },
        {
          type: 'button',
          props: {
            type: 'primary',
            children: '返回',
          },
          action: 'back',
        },
      ],
      view: [
        {
          type: 'button',
          props: {
            type: 'primary',
            children: '返回',
          },
          action: 'back',
        },
      ],
    },
    remoteValues: {
      url:
        'https://www.fastmock.site/mock/c34b6d8a0f17200eb13d75100bed05c5/sula-demo/api/manage/detail',
      method: 'post',
      params: {
        id: 19,
      },
    },
  };

  const handleChange = value => {
    setMode(value);
  };

  return (
    <>
      <ModeSwitcher value={mode} onChange={handleChange} />
      <CreateForm {...handleDynamicFormData(config, mode)} key={mode} />
    </>
  );
};
```

## <span style="font-size:18px; color: #4569d4">后续工作</span>

- [ ] react 的版本问题

## <span style="font-size:18px; color: #4569d4">问题</span>

- `不要直接在里面写function，序列化对于方法会存在一定问题，最好是具体的方法，在业务调用的地方，单独自己处理一下。`

## <span style="font-size:18px; color: #4569d4">历史版本</span>

### <span style="font-size:16px; color: #EB2F96">1.0.1</span>

没有三种模式的代码，和 sula-cooker 的功能基本一样的版本

## <span style="font-size:18px; color: #4569d4">源码地址</span>

[sula-dynamic-form](https://github.com/rodchen-king/sula-dynamic-form)
