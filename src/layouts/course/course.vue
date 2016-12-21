<template src='./course.html'></template>

<style scoped src='./course.css'></style>

<script>
import courseDetail from '../../components/course-detail/course-detail'

export default {
    name: 'course',
    data: function () {
        return {
            course: {
                id: 1,
                name: 'GraphSQL',
                description: 'Learn GrapSQL',
                members: [{
                    id: 1,
                    username: 'Leslie Burton',
                    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                    email: 'leslie.burton45@example.com',
                    isOwner: false
                }, {
                    id: 2,
                    username: 'Lorraine Berry',
                    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
                    email: 'lorraine.berry88@example.com',
                    isOwner: true
                }, {
                    id: 3,
                    username: 'Mark Moreno',
                    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
                    email: 'mark.moreno65@example.com',
                    isOwner: false
                }, {
                    id: 4,
                    username: 'Jared Henry',
                    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
                    email: 'jared.henry58@example.com',
                    isOwner: false
                }],
                members_limit: 10,
                status: 'active'
            }
        }
    },
    components: {
        courseDetail
        // subjectList,
        // courseWall
    }
    // methods: {
    //     getCourses: function (subject) {
    //         this.subject = subject
    //     }
    // }
}
</script>
