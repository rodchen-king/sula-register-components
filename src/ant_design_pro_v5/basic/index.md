---
nav:
  title: 'ant design pro v5 + sula'
  order: 1
group:
  title: ant design pro v5
  order: 2
title: 基本介绍
order: 0
---

[官方网站](https://beta-pro.ant.design/docs/getting-started-cn)

> Ant Design Pro 是基于 Ant Design 和 umi 的封装的一整套企业级中后台前端/设计解决方案，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。
>
> Ant Design Pro 在力求提供开箱即用的开发体验，为此我们提供完整的脚手架，涉及国际化，权限，mock，数据流，网络请求等各个方面。为这些中后台中常见的方案提供了最佳实践来减少学习和开发成本。
>
> 同时为了提供更加高效的开发体验，我们提供了一些列重型组件，ProLayout，ProTable，ProList 都是开发中后台的好帮手，可以显著的减少样板代码。

<br>

我们可以通过下面的大图来了解整个 Ant Design Pro 的架构。

<br>

![](https://gw.alipayobjects.com/zos/antfincdn/gjQQ3WuG8E/huitu1.svg)

<br>

Pro V5 中的架构做了全新的改动，全部修改为全新的 [umi@3](https://umijs.org/zh-CN/plugins/api) 架构, 对于数据流，权限，布局都进行了内置，修改为了全新的插件。这些改进都是渐进式的，只要你升级为 umi@3 ，是可以兼容两种开发模式的

### 内置插件

- @umijs/plugin-initial-state ：初始数据处理
- @umijs/plugin-model ：数据状态管理
- @umijs/plugin-layout：布局配置
- @umijs/plugin-access：权限控制

<br>

具体可以看一下 [文章介绍](https://github.com/ant-design/ant-design-pro/issues/6605)
