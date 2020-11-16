/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-28 10:16:11
 * @LastEditTime: 2020-11-16 21:04:01
 * @LastEditors: rodchen
 */
import { registerFieldPlugin, request } from 'sula';
import sula from 'sula/es/core';
import EditTable from '../components/EditTable';

// config 配置
request.use({
  bizRequestAdapter(requestConfig) {
    debugger;
    requestConfig.headers = {
      'x-tenant-id': '2',
    };
    return requestConfig;
  },
});

/** render插件 */

/** field插件 */
registerFieldPlugin('editTable')(EditTable, true, true);

sula.validatorType('edit-table', ctx => {
  const { value, name } = ctx || {};

  if (!value) {
    return Promise.resolve();
  }

  const ErrorArray = [];
  value.forEach((row, index) => {
    Object.keys(row).forEach(cell => {
      if (!row[cell]) {
        ErrorArray.push(`第${index + 1}条数据不正确`);
      }
    });
  });

  if (ErrorArray.length) {
    return Promise.reject(ErrorArray[0]);
  }

  return Promise.resolve();
});
