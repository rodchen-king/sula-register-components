---
nav:
  title: 'ant design pro v5 + sula'
  order: 2
group:
  title: sula
  order: 2
title: request
order: 5
---

[官方网站](https://docs.sula.now.sh/plugin/other-action-plugin/request#bizparamsadapter)

sula 的请求和 umijs 的不是同一套体系，内置的接口请求。所以需要单独处理：

## <span style="font-size:18px; color: #4569d4">创建 sula-config.js</span>

```
import { request as sulaRequest } from 'sula';

// sula的请求配置
sulaRequest.use({
  bizRequestAdapter: (requestConfig) => {
    // eslint-disable-next-line no-param-reassign
    requestConfig.url = `https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04${ requestConfig.url}`
    return requestConfig;
  },
});
```

### <span style="font-size:16px; color: #EB2F96">app.ts 引入文件</span>

```
import './sula-config'
```
