<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
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
        }
    }
`

export default {
    name: 'courses-list',
    data: function () {
        return {
            courses: ''
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
                query: courseFilter,
                variables: {
                    filter: {
                        byTopic: '',
                        byStatus: ''
                    }
                }
            })
            .then(res => {
                console.log(res)
                this.courses = res.data.courses
            })
        }
    }
}
</script>
