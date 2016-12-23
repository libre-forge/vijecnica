import VueRouter from 'vue-router'

import home from './layouts/home/home'
import login from './layouts/login/login'
import AddCourse from './layouts/add-course/add-course'
import course from './layouts/course/course'
import subject from './layouts/subject/subject'
import user from './lib/auth'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            isDefault: true
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/course/add',
            name: 'add-course',
            component: AddCourse,
            meta: { requiresAuth: true }
        },
        {
            path: '/course/:id',
            name: 'course',
            component: course
        },
        {
            path: '/course/:courseId/subject/:subjectId',
            name: 'subject',
            component: subject
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!user.isAuthenticated()) {
            return next({
                name: 'login',
                query: { redirect: to.fullPath }
            })
        }
    }

    return next()
})

export { VueRouter, router }
