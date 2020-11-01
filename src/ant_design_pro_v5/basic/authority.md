---
nav:
  title: 'ant design pro v5 + sula'
  order: 1
group:
  title: ant design pro v5
  order: 3
title: 权限控制
order: 4
---

[官方网站](https://beta-pro.ant.design/docs/authority-management-cn)

## <span style="font-size:18px; color: #4569d4">页面菜单权限集成接口</span>

### <span style="font-size:16px;color:#EB2F96;">mock 数据</span>

```
'GET /api/user/fetchUserMenuAuth': (req: Request, res: Response) => {
    access = '';
    res.send([{code: 'admin', path: '/admin'}, {code: 'sub-page', path: '/admin/sub-page'}, {code: 'list', path: '/list'}]);
  },
```

### <span style="font-size:16px;color:#EB2F96;">修改 app.tsx 文件，增加一个 userMenuAuth 字段</span>

```
export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  currentUser?: API.CurrentUser;
  fetchUserInfo: () => Promise<API.CurrentUser | undefined>;
  userMenuAuth?: API.AuthMenuData[];
}> {
  // 获取用户信息
  const fetchUserInfo = async () => {
    try {
      const currentUser = await queryCurrent();
      return currentUser;
    } catch (error) {
      history.push('/user/login');
    }
    return undefined;
  };
  // 获取权限信息
  const fetchUserMenuAuth = async () => {
    try {
      const muenAuth = await queryUserMenuAuth();
      return muenAuth;
    } catch (error) {
      history.push('/user/login');
    }
    return [];
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      userMenuAuth: await fetchUserMenuAuth(),
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    userMenuAuth: await fetchUserMenuAuth(),
    settings: defaultSettings,
  };
}
```

### <span style="font-size:16px;color:#EB2F96;">修改 access.ts 文件</span>

```
// src/access.ts
export default function access(initialState: { userMenuAuth?: API.AuthMenuData[] }) {
  const { userMenuAuth } = initialState || {};
  return {
    canAdmin: (route: API.Route) =>  canAdmin(route, userMenuAuth)
  };
}
function canAdmin(route: API.Route, userMenuAuth?: API.AuthMenuData[]) {
  return !!userMenuAuth?.filter((item: API.Route) => item.code === route.code).length
}
```

### <span style="font-size:16px;color:#EB2F96;">路由文件使用 access: 'canAdmin'</span>

```
{
  path: '/admin',
  name: 'admin',
  code: 'admin',
  icon: 'crown',
  access: 'canAdmin',
  component: './Admin',
  routes: [
    {
      path: '/admin/sub-page',
      name: 'sub-page',
      code: 'sub-page',
      access: 'canAdmin',
      icon: 'smile',
      component: './Welcome',
    },
  ],
},
{
  name: 'list.table-list',
  icon: 'table',
  path: '/list',
  code: 'list',
  component: './ListTableList',
}
```

## <span style="font-size:18px; color: #4569d4">按钮权限接口集成</span>

Todo
