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
            members {
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
            course: '',
            getAvatar: this.getAvatar
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
                console.log(this.courseId)
                return {
                    courseID: this.courseId
                }
            },
            result (coursee) {
                console.log(this)
                this.course = coursee.course
            },
            loadingKey: 'loading'
        }
    },
    components: {
        loading
    },
    methods: {
        getAvatar (email) {
            return md5(email)
        }
    }
}
</script>
