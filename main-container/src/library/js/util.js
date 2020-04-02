/**
 * auth: weilan
 * time: 2017/01/17
 * des: 公共工具类
 */

import store from "@/store";

/**
 * 跨应用路由跳转
 * @param {String} href url地址
 * @param {Object} stateObj 状态参数 可以通过history.state读取
 * @param {String} title 标题 暂时没有用
 */
function routerGo(routerId = 'null',href = '/', title = null, stateObj = {}) {
  window.history.pushState(stateObj, title, href);
  store.dispatch('currentrouter/changeCurrentRouter', routerId)

}



export {
  routerGo // 跨应用路由跳转
}