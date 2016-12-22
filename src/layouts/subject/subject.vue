<template src='./subject.html'></template>

<style scoped src='./subject.css'></style>

<script>
import Navigation from '../../components/nav/nav'
import subjectDetail from '../../components/subject-detail/subject-detail'
import wall from '../../components/wall/wall'
import resources from '../../components/resources/resources'
import gql from 'graphql-tag'

const subjectQuery = gql`
    query Subject($id: String!) {
        subject(id: $id) {
            id
            title
            description
            course {
                id
                title
            }
            resource_count
            resources {
                id
                title
                description
                mime
                uri
                subject
                created_at
                created_by
            }
            order
            finished_at
        }
    }
`
export default {
    name: 'subject',
    data: function () {
        return {
            courseId: this.$route.params.courseId,
            subjectId: this.$route.params.subjectId,
            subject: {},
            user: {
                id: 1,
                username: 'Leslie Burton',
                avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                email: 'leslie.burton45@example.com'
            }
        }
    },
    components: {
        Navigation,
        subjectDetail,
        resources,
        wall
    },
    apollo: {
        subject: {
            query: subjectQuery,
            variables () {
                return { id: this.subjectId }
            }
        }
    }
}
</script>
