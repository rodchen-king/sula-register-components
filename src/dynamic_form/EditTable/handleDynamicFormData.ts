/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-11-05 20:34:58
 * @LastEditTime: 2020-11-05 20:41:43
 * @LastEditors: rodchen
 *
 */

interface configData {
  actionsRender: {
    [key: string]: string;
  };
}

function handleDynamicFormData(config: configData, mode: string) {
  return {
    ...config,
    actionsRender: config.actionsRender[mode],
  };
}

export default handleDynamicFormData;
