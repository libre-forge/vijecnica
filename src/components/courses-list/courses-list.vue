<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
import courseCard from '../course-card/course-card'
import gql from 'graphql-tag'

// GraphQL query
const courseList = gql`
    {
        courses {
            title
        }
    }
`

export default {
    name: 'courses-list',
    props: {
        subject: {
            type: String,
            required: true
        }
    },
    apollo: {
        courses: {
            query: courseList
        }
    },
    components: {
        courseCard
    },
    watch: {
        subject: function (val) {
            console.log('miCasa')
            // this.$apollo.queries.courses
        }
    }
}
</script>
