<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
import courseCard from '../course-card/course-card'
import gql from 'graphql-tag'

// GraphQL query
// const courseList = gql`
//    query CourseList($test: String!) {
//        courses(title: $test)
//    }
// `

const courseList = gql`
    {
        courses {
            id
            title
            pitch
            member_limit
            member_count
            status
        }
    }
`

export default {
    name: 'courses-list',
    data: function () {
        return {
            courses: {}
        }
    },
    props: {
        subject: {
            type: String
        }
    },
    components: {
        courseCard
    },
    watch: {
        subject: function (itemToSearch) {
            this.$apollo.query({
                query: courseList
                // variables: {
                //    courses: {
                //        test: 'casa'
                //    }
                // }
            })
            .then(res => {
                this.courses = res.data.courses
            })
        }
    }
}
</script>
