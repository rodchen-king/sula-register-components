---
nav:
  title: 'ant design pro v5 + sula'
  order: 1
group:
  title: ant design pro v5 + sula
  order: 3
title: 国际化
order: 0
---

## <span style="font-size:18px; color: #4569d4">国际化问题</span>

### <span style="font-size:16px;color:#EB2F96;">使用 sula 的 queryatble 的国际化问题</span>

主要做下面红色标注同类型的文本国际化，标注的地方是 sula 内部注册组件的国际化文本，而我们系统层级没有直接操作，所以需要做一些处理。

![](<https://raw.githubusercontent.com/rodchen-king/front-book/master/image%20(5).png>)

### <span style="font-size:16px;color:#EB2F96;">config.ts sula 配置添加 locale</span>

```
sula: {
    locale: {
      default: 'zh-CN',
      // default true, when it is true, will use `navigator.language` overwrite default
      baseNavigator: true,
    },
  },
```

### <span style="font-size:16px;color:#EB2F96;">新增 src/components/access/index.js</span>

```
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useModel, useIntl, history, getLocale } from 'umi';
import { ConfigProvider } from 'sula';
import zhCN from '@/locales/zh-CN/sula';
import enUS from '@/locales/en-US/sula';
// 提供 权限 和 国际化 控制 （umi3权限和国际化采用hooks写法，class组件不能直接使用）

export default Com => {
  return props => {
    const { initialState } = useModel('@@initialState');
    const { currentUser = 'none' } = initialState;
    const intl = useIntl();
    const { formatMessage } = intl;
    return (
      <ConfigProvider
        history={history}
        locale={getLocale() === 'zh-CN' ? zhCN : enUS}
      >
        <Com currentUser={currentUser} formatMessage={formatMessage} {...props} />
      </ConfigProvider>
    );
  };
};
```

这里会处理两个问题

- 一个添加 ConfigProvider 处理 sula 内部组件的国际化。
- formatMessage 方法传递，用于 sula，json 里面

### <span style="font-size:16px;color:#EB2F96;">复制出来的 sula 内部的 locale 文件</span>

这里的两个文件基础是从 sula 源码里复制出来的：

```
import zhCN from '@/locales/zh-CN/sula';
import enUS from '@/locales/en-US/sula';
```

```
export default {
  saveText: '保存',
  submitText: '提交',
  updateText: '更新',
  cancelText: '取消',
  okText: '确定',
  backText: '返回',
  queryText: '查询',
  resetText: '重置',
  nextText: '下一步',
  previousText: '上一步',
  clearText: '清空',
  expandText: '展开',
  collapseText: '收起',
  successText: '成功',
  // table
  selectedRecords: '已选 {{count}} 项',
};
```

### <span style="font-size:16px;color:#EB2F96;">业务 json 使用</span>

```
    fields: [
      {
        name: 'name',
        label: format({ id: 'event.name' }),
        field: 'input',
      },
    ],
```

### <span style="font-size:16px;color:#EB2F96;">业务组件全部代码</span>

```
const Normatble = (props) => {
  const [formType, setFormType] = React.useState('modalForm');
  const format = props.formatMessage;
  const config = {
    layout: 'vertical',
    remoteDataSource,
    actionsRender: [
      {
        type: 'button',
        visible: ctx => {
          const selectedRowKeys = ctx.table.getSelectedRowKeys() || [];
          return selectedRowKeys.length;
        },
        props: {
          children: '批量删除',
          type: 'primary',
        },
        action: [
          ctx => {
            console.log(ctx.table.getSelectedRowKeys(), '批量删除');
          },
        ],
      },
      {
        type: 'button',
        visible: ctx => {
          const selectedRowKeys = ctx.table.getSelectedRowKeys() || [];
          return selectedRowKeys.length;
        },
        props: {
          children: '批量发布',
          type: 'primary',
        },
        action: [
          ctx => {
            console.log(ctx.table.getSelectedRowKeys(), '批量发布');
          },
        ],
      },
      {
        type: 'button',
        props: {
          children: '创建',
          type: 'primary',
        },
        action: [
          {
            type: formType,
            title: '创建',
            fields: basicFields,
            submit: {
              url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
              method: 'POST',
            },
          },
          'refreshtable',
        ],
      },
      {
        type: 'button',
        props: {
          children: '刷新',
          type: 'primary',
        },
        action: ['refreshTable'],
      },
    ],
    fields: [
      {
        name: 'name',
        label: format({ id: 'event.name' }),
        field: 'input',
      },
    ],
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'name',
        title: '姓名',
      },
      {
        key: 'nat',
        title: '国家',
      },
      {
        key: 'gender',
        title: '性别',
        render: ({ text }) => {
          return text === 'male' ? '男' : '女';
        },
      },
      {
        key: 'email',
        title: '邮箱',
      },
    ],
    rowKey: 'cell',
  };
  return (
    <div
      style={{ background: 'rgb(241, 242, 246)', padding: 16, marginTop: 16 }}
    >
      <QueryTable {...config} />
    </div>
  );
};
export default access(Normatble);
```
