---
nav:
  title: 'ant design pro v5 + sula'
  order: 1
group:
  title: ant design pro v5
  order: 2
title: 项目搭建
order: 0
---

[官方网站](https://beta-pro.ant.design/docs/getting-started-cn)

## <span style="font-size:18px; color: #4569d4">项目搭建过程</span>

```bash
$ yarn create umi my-app

Select the boilerplate type: 选择 Ant Design Pro
❯ ant-design-pro

Which language do you want to use? 选择你使用的语言
❯ TypeScript
 JavaScript

$ cd my-app
$ yarn
$ yarn start # 打开浏览器访问 http://localhost:8000
```

## <span style="font-size:18px; color: #4569d4">项目初始化</span>

因为目前正式版本还没有发布：所以创建的项目如下：

<br>

![](<https://raw.githubusercontent.com/rodchen-king/front-book/master/image%20(2).png>)

<br>

## <span style="font-size:18px; color: #4569d4">添加区块 UI 页面</span>

```
npm install @umijs/preset-ui -D
```

![](<https://raw.githubusercontent.com/rodchen-king/front-book/master/image%20(4).png>)

<br>

## <span style="font-size:18px; color: #4569d4">获取官方 review 所有模块页面</span>

因为现在还不是正式版本，所有还不直接支持获取所有模块页面，下面的方式是[github 给的解决方案](https://github.com/ant-design/ant-design-pro/issues/7262)

```
yarn fetch-blocks --branch v5
```

当中可能会遇到报错的情况，报一些 package 的版本问题，可以根据提示，修改 package.json 的版本号进行安装，安装成功之后在将 package 的版本号修改回来。
