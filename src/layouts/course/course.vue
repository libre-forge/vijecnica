<template src='./course.html'></template>

<style scoped src='./course.css'></style>

<script>
import gql from 'graphql-tag'
import Navigation from '../../components/nav/nav'
import courseDetail from '../../components/course-detail/course-detail'
import subjectsList from '../../components/subjects-list/subjects-list'
import wall from '../../components/wall/wall'
import user from '../../lib/auth'

const joinToCourse = gql`
    mutation JoinToCourse($courseID: String!, $userID: String!) {
        join(course: $courseID, member: $userID) {
            id
        }
    }
`

export default {
    name: 'course',
    data: function () {
        return {
            user: user.get(),
            courseid: this.$route.params.id
        }
    },
    components: {
        Navigation,
        courseDetail,
        subjectsList,
        wall
    },
    created () {
        this.join()
    },
    methods: {
        getUser: function () {
            console.log('get User and overwrite var user')
        },
        join: function () {
            if (this.$route.query && this.$route.query.join) {
                return this.$apollo.mutate({
                    mutation: joinToCourse,
                    variables: {
                        courseID: this.courseid,
                        userID: this.user.id
                    }
                })
                .then(data => {
                    console.log(data)
                })
            }
        }
    }
}
</script>
