/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-28 10:16:11
 * @LastEditTime: 2020-10-31 23:25:18
 * @LastEditors: rodchen
 */
import * as sula from 'sula';
import { EditTable } from 'sula-register-components';

const { registerFieldPlugin } = sula;

/** render插件 */

/** field插件 */
registerFieldPlugin('editTable')(EditTable);

/** convertParams */
// registerPlugin('convertParams', 'addIdToParams', ctx => {
//   // convertParams插件，params: {id: xxx} json化
//   const { params } = ctx;
//   const { hash } = window.location;
//   const id = hash.split('/').reverse()[0];
//   return {
//     ...params,
//     id,
//   };
// });
