import VueRouter from 'vue-router'
import miComponent from './components/micomponent/micomponent'
import home from './layouts/home/home'
import AddCourse from './layouts/add-course/add-course'
import course from './layouts/course/course'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: home, isDefault: true },
        { path: '/test', name: 'test', component: miComponent },
        { path: '/course/add', name: 'add-course', component: AddCourse },
        { path: '/course/:id', name: 'course', component: course }
    ]
})

export { VueRouter, router }
