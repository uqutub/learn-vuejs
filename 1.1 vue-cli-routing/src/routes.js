import VueRouter from 'vue-router'

function load (name) {
  return require('./components/' + name + '.vue')
}

// Define some routes
const routes = [
  { path: '/', redirect: '/b' },
  { path: '/home', component: load('Home'), alias: '/b' },
  { path: '/about', component: load('About') },
  { path: '/user/:id',
    name: 'user',
    component: load('User'),
    children: [
      {
            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
        path: 'profile',
        component: load('UserProfile')
      }
    ]
  }
]

// add routes in router
const router = new VueRouter({
  mode: 'history',
  routes
})

// Navigation Guard middileware
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  if (to.path === '/about') {
    // next('/') or next({ path: '/' })
    next({ path: '/user/fromAbout' })
  } else {
    next()
  }
})

export default router
