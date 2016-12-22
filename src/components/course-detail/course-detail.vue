<template src='./course-detail.html'></template>

<style scoped src='./course-detail.css'></style>

<script>
import loading from '../../components/loading/loading'

export default {
    name: 'course-detail',
    prop: {
        id: {}
    },
    data () {
        return {
            loading: false,
            course: {
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
            }
        }
    },
    created () {
        this.fetchData()
    },
    components: {
        loading
    },
    methods: {
        fetchData () {
            console.log('API CALL -> get course data based on', this.id)
            this.loading = true
            // On success promise
            setTimeout(() => {
                console.log('Update course', this.id)
                this.loading = false
            }, 3000)
        }
    }
}
</script>
