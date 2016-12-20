import VueRouter from 'vue-router'
import miComponent from './components/micomponent/micomponent'
import home from './layouts/home/home'
import AddCourse from './layouts/add-course/add-course'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: home, isDefault: true },
        { path: '/test', component: miComponent },
        { path: '/course/add', component: AddCourse },
        { path: '/course/:id', name: 'course', component: AddCourse }
    ]
})

export { VueRouter, router }
