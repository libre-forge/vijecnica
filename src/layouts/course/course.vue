<template src='./course.html'></template>

<style scoped src='./course.css'></style>

<script>
import Navigation from '../../components/nav/nav'
import courseDetail from '../../components/course-detail/course-detail'
import subjectsList from '../../components/subjects-list/subjects-list'
import wall from '../../components/wall/wall'

export default {
    name: 'course',
    data: function () {
        return {
            user: {
                id: 1,
                username: 'Leslie Burton',
                avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                email: 'leslie.burton45@example.com'
            },
            courseid: this.$route.params.id
        }
    },
    components: {
        Navigation,
        courseDetail,
        subjectsList,
        wall
    },
    methods: {
        getUser: function () {
            console.log('get User and overwrite var user')
        }
    }
}
</script>
