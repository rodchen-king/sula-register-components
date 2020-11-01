---
nav:
  title: 'ant design pro v5 + sula'
  order: 2
group:
  title: ant design pro v5
  order: 2
title: request
order: 5
---

[官方网站](https://umijs.org/zh-CN/plugins/plugin-request)

## <span style="font-size:18px; color: #4569d4">配置 app.tsx 文件</span>

```
export const request: RequestConfig = {
  errorHandler,
  requestInterceptors,
};
```

### <span style="font-size:16px; color: #EB2F96">错误处理和请求拦截</span>

```
/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

// 请求拦截
const requestInterceptors = [
  (url: string, options: RequestOptionsInit) => {
    return {
      url: `https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04${url}`,
      options,
    };
  },
];
```
