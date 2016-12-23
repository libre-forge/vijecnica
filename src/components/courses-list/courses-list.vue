<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
import Navigation from '../nav/nav'
import Searchbox from '../searchbox/searchbox'
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
        Navigation,
        Searchbox,
        courseCard
    },
    watch: {
        subject: function (itemToSearch) {
            this.doQuery(itemToSearch)
        }
    },
    methods: {
        editQuery: function (subjectToSearch) {
            this.doQuery(subjectToSearch)
        },
        doQuery: function (subjectToSearch) {
            this.$apollo.query({
                query: courseFilter,
                variables: {
                    filter: {
                        byTopic: subjectToSearch,
                        byStatus: 'active'
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
