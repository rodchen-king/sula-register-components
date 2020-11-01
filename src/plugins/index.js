/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-28 10:16:11
 * @LastEditTime: 2020-11-01 16:09:16
 * @LastEditors: rodchen
 */
import * as sula from 'sula';
import { EditTable } from 'sula-register-components';

const { registerFieldPlugin } = sula;

/** render插件 */

/** field插件 */
registerFieldPlugin('editTable')(EditTable);
