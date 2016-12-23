
<template src='./course-card.html'></template>

<style scoped src='./course-card.css'></style>

<script>
import { router } from '../../router'
import user from '../../lib/auth'

export default {
    name: 'course-card',
    props: {
        course: {
            type: Object,
            required: true
        }
    },
    methods: {
        joinToCourse: function (id) {
            if (user.isAuthenticated()) {
                return router.push({
                    path: `/course/${id}?join=true`
                })
            }

            return router.push({
                name: 'login',
                query: {
                    redirect: `/course/${id}?join=true`
                }
            })
        }
    }
}
</script>
