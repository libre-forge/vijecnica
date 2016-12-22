<template src='./subjects-list.html'></template>

<style scoped src='./subjects-list.css'></style>

<script>
import subjectItem from './subject-item/subject-item'
import gql from 'graphql-tag'

const subjectsListQuery = gql`
    query SubjectsList($course: String!) {
        subjects(course: $course) {
            id
            title
            description
            order
            resource_count
            finished_at
        }
    }
`

export default {
    name: 'subjects-list',
    props: {
        courseId: {}
    },
    data: function () {
        return {
            subjects: []
        }
    },
    components: {
        subjectItem
    },
    apollo: {
        subjects: {
            query: subjectsListQuery,
            variables () {
                return { course: this.courseId }
            }
        }
    }
}
</script>
