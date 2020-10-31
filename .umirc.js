/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-29 00:09:15
 * @LastEditTime: 2020-10-31 23:51:27
 * @LastEditors: rodchen
 */
import { defineConfig } from 'dumi';

export default {
  title: 'sula-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  sula: {},
  history: {
    type: 'hash',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
};
