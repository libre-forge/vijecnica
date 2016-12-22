<template src='./course-detail.html'></template>

<style scoped src='./course-detail.css'></style>

<script>
import loading from '../../components/loading/loading'
import md5 from 'md5'
import gql from 'graphql-tag'

const courseDetail = gql`
    query CourseDetails($courseID: String!) {
        course(id: $courseID) {
            title
            pitch
            description
            created_by {
                id
                email
                name
            }
            status
            members{
                id
                email
                name
            }
        }
    }
`

export default {
    name: 'course-detail',
    prop: {
        id: {}
    },
    data () {
        return {
            course: undefined
        }
    },
    props: {
        courseId: {
            type: String,
            required: true
        }
    },
    apollo: {
        course: {
            query: courseDetail,
            variables () {
                return {
                    courseID: this.courseId
                }
            },
            result (course) {
                this.course = course.course
            },
            loadingKey: 'loading'
        }
    },
    components: {
        loading
    },
    methods: {
        getAvatar (user) {
            return `http://gravatar.com/avatar/${md5(user.email)}`
        }
    }
}
</script>
