import VueRouter from 'vue-router'
import miComponent from './components/micomponent/micomponent'

const router = new VueRouter({
  mode: 'history',q
  routes: [
    { path: '/test', component: miComponent }
  ]
})

export { VueRouter, router }
