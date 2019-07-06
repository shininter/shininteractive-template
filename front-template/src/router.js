/*
 * @Author: godkun(github)
 * @LastEditors: godkun(github)
 * @Description: 路由设置 动态路由
 * @Date: 2019-04-03 09:39:22
 * @LastEditTime: 2019-06-23 04:13:41
 */

import Vue from 'vue'
import Router from 'vue-router'
import Loading from './pages/loading/index.vue'

Vue.use(Router)

let base = `${process.env.BASE_URL}`
let router = new Router({
  mode: 'hash',
  base: base,
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})
export default router
