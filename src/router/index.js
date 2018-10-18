import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/Detail'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true, //此组件需要被缓存
    }

    },
    {
      path: '/detail/:sysname',
      name: 'Detail',
      component: Detail,
      meta: {
        keepAlive: false, //此组件不需要被缓存
    }
    }
  ]
})
