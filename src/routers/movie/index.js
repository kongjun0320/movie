export default {
  path: '/movie',
  component: () => import('../../views/movie/Movie.vue'),
  children: [{
      path: 'city',
      component: () => import('../../components/City.vue')
    },
    {
      path: 'search',
      component: () => import('../../components/Search.vue')
    },
    {
      path: 'nowPlaying',
      component: () => import('../../components/NowPlaying.vue')
    },
    {
      path: 'comingSoon',
      component: () => import('../../components/ComingSoon.vue')
    }, {
      path: '',
      redirect: 'nowPlaying'
    }
  ]
}
