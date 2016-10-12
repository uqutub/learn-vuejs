// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'
import App from './components/App'

Vue.use(VueRouter)

new Vue({
  // name: 'Test',
  router,
  render: h => h(App)
}).$mount('#app')
