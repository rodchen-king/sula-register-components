---
nav:
  title: 'ant design pro v5 + sula'
  order: 1
group:
  title: ant design pro v5
  order: 3
title: 数据流
order: 3
---

- [官方全局初始数据网站](https://beta-pro.ant.design/docs/initial-state-cn)
- [官方数据流网站](https://beta-pro.ant.design/docs/simple-model-cn)

## <span style="font-size:18px; color: #4569d4">全局初始数据流</span>

### <span style="font-size:16px; color: #EB2F96">简介</span>

初始化部分数据，和 layout 和权限打通

### <span style="font-size:16px; color: #EB2F96">插件</span>

```bash
@umijs/plugin-initial-state
```

### <span style="font-size:16px; color: #EB2F96">如何使用</span>

```js
// src/app.ts
export async function getInitialState() {
  return {
    userName: 'xxx',
  };
}
```

## <span style="font-size:18px; color: #4569d4">定义全局 model 数据</span>

### <span style="font-size:16px; color: #EB2F96">新增 model 文件【src/models】</span>

在 src/models 目录下新建文件，文件名会成为 model 的 namespace. 允许使用 ts, js, tsx(不推荐), jsx(不推荐) 四种后缀

```js
import { useState, useCallback } from 'react';
export default () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter(c => c + 1), []);
  const decrement = useCallback(() => setCounter(c => c - 1), []);
  debugger;
  return { counter, increment, decrement };
};
```

### <span style="font-size:16px; color: #EB2F96">使用</span>

```js
const useAuthModel = useModel('useAuthModel');
```

## <span style="font-size:18px; color: #4569d4">业务组件跨组件数据共享</span>

dva【待添加】
