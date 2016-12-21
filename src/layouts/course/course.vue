<template src='./course.html'></template>

<style scoped src='./course.css'></style>

<script>
import detailInfo from '../../components/detail-info/detail-info'
import wall from '../../components/wall/wall'

export default {
    name: 'course',
    data: function () {
        return {
            courseData: {
                id: 1,
                name: 'GraphSQL',
                description: 'Learn GraphSQL',
                owner: {
                    id: 1,
                    username: 'Leslie Burton',
                    avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                    email: 'leslie.burton45@example.com'
                },
                members: [{
                    id: 2,
                    username: 'Lorraine Berry',
                    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
                    email: 'lorraine.berry88@example.com'
                }, {
                    id: 3,
                    username: 'Mark Moreno',
                    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
                    email: 'mark.moreno65@example.com'
                }, {
                    id: 4,
                    username: 'Jared Henry',
                    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
                    email: 'jared.henry58@example.com'
                }],
                members_limit: 10,
                status: 'active'
            },
            comments: [
                'The human body was designed by a civil engineer. Who else would run a toxic waste pipeline through a recreational area?',
                'Look! In the sky. It\'s a bird, it\'s a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I\'m just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange.',
                'Sorry, I can\'t hangout. My uncle\'s cousin\'s sister in law\'s best friend\'s insurance agent\'s roommate\'s pet goldfish died. Maybe next time.',
                'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
                'I can drive 10 miles, walk 50 feet. Turn around and before I know it, I\'d be back home. Or would I? I\'m not sure but that\'s just how it is.'
            ]
        }
    },
    components: {
        detailInfo,
        wall
        // subjectList,
    }
    // methods: {
    //     getCourses: function (subject) {
    //         this.subject = subject
    //     }
    // }
}
</script>
