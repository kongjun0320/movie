import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    MineRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
