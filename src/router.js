import VueRouter from 'vue-router'
import miComponent from './components/micomponent/micomponent'
import home from './layouts/home/home'
import AddCourse from './layouts/add-course/add-course'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: home },
        { path: '/test', component: miComponent },
        { path: '/course/add', component: AddCourse }
    ]
})

export { VueRouter, router }
