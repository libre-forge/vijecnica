<template src='./course.html'></template>

<style scoped src='./course.css'></style>

<script>
export default {
    name: 'course',
    data: function() {
        return {
            id: 1,
            name: 'GraphSQL',
            description: 'Learn GrapSQL',
            members: [
                {
                    id: 1,
                    username: 'Leslie Burton',
                    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                    email: 'leslie.burton45@example.com'
                },
                {
                    id: 2,
                    username: 'Lorraine Berry',
                    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
                    email: 'lorraine.berry88@example.com'
                },
                {
                    id: 3,
                    username: 'Mark Moreno',
                    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
                    email: 'mark.moreno65@example.com'
                },
                {
                    id: 4,
                    username: 'Jared Henry',
                    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
                    email: 'jared.henry58@example.com'
                },
            ]
            members_limit: 10,
            status: 'active'
        }
    },
    // components: {
    //     courseInfo,
    //     subjectList,
    //     courseWall
    // },
    // methods: {
    //     getCourses: function (subject) {
    //         this.subject = subject
    //     }
    // }
}
</script>
