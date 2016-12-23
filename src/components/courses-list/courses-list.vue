<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
import Navigation from '../nav/nav'
import courseCard from '../course-card/course-card'
import gql from 'graphql-tag'

// GraphQL query
const courseFilter = gql`
    query CourseFilter($filter:CourseFilter){
        courses(filter:$filter){
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
        courseCard,
        Navigation
    },
    watch: {
        subject: function (itemToSearch) {
            this.$apollo.query({
                query: courseFilter,
                variables: {
                    filter: {
                        byTopic: itemToSearch,
                        byStatus: 'active'
                    }
                }
            })
            .then(res => {
                this.courses = res.data.courses
            })
        }
    }
}
</script>
