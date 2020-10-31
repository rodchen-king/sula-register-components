/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-28 10:16:11
 * @LastEditTime: 2020-10-29 23:17:07
 * @LastEditors: rodchen
 */
import * as sula from 'sula';
import { EditTable } from 'beta-sula-component';

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
