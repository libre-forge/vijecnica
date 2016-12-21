import VueRouter from 'vue-router'

import home from './layouts/home/home'
import AddCourse from './layouts/add-course/add-course'
import course from './layouts/course/course'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: home, isDefault: true },
        { path: '/course/add', name: 'add-course', component: AddCourse },
        { path: '/course/:id', name: 'course', component: course }
    ]
})

export { VueRouter, router }
