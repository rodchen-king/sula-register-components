---
nav:
  title: 'ant design pro v5 + sula'
  order: 5
group:
  title: ant design pro v5
  order: 2
title: 国际化
order: 5
---

[官方网站](https://beta-pro.ant.design/docs/i18n-cn)

## <span style="font-size:18px; color: #4569d4">国际化问题</span>

因为当前整个业务组件我们会使用 hoc 进行封装传入 formatMessage 用于国际化 [新增 src/components/access/index.js](http://localhost:8000/#/ant_design_pro_v5/intergate/locale#%E6%96%B0%E5%A2%9Esrccomponentsaccessindexjs)

### <span style="font-size:16px; color: #EB2F96">使用</span>

```js
const format = props.formatMessage;

format({ id: 'event.name' });
```
