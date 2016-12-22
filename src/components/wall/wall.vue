<template src='./wall.html'></template>

<style scoped src='./wall.css'></style>

<script>
import loading from '../../components/loading/loading'
import comment from '../../components/wall/comment/comment'

export default {
    name: 'wall',
    data () {
        return {
            id: this.$route.params.id,
            loading: false,
            newComment: {
                owner: this.user,
                comment: ''
            },
            comments: [],
            timeline: {}
        }
    },
    created () {
        this.fetchData()
    },
    beforeUpdate () {
        this.scrollBottom()
    },
    components: {
        loading,
        comment
    },
    props: {
        user: {
            type: Object,
            required: false
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            this.loading = true
            console.log('API CALL -> get comments wall based on', this.id)
            // On success promise delete this and update this.comments
            setTimeout(() => {
                this.comments = [{
                    comment: 'The human body was designed by a civil engineer. Who else would run a toxic waste pipeline through a recreational area?',
                    owner: {
                        id: 4,
                        username: 'Jared Henry',
                        avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
                    }
                }, {
                    comment: 'Look! In the sky. It\'s a bird, it\'s a plane. Or is it a hellicopter? No actually I think it is a bird. Or maybe I\'m just seeing things. Who knows... After 10 shots of Whiskey things start to get a bit strange.',
                    owner: {
                        id: 3,
                        username: 'Mark Moreno',
                        avatar: 'https://randomuser.me/api/portraits/men/58.jpg'
                    }
                }, {
                    comment: 'Sorry, I can\'t hangout. My uncle\'s cousin\'s sister in law\'s best friend\'s insurance agent\'s roommate\'s pet goldfish died. Maybe next time.',
                    owner: {
                        id: 1,
                        username: 'Leslie Burton',
                        avatar: 'https://randomuser.me/api/portraits/women/35.jpg'
                    }
                }, {
                    comment: 'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
                    owner: {
                        id: 4,
                        username: 'Jared Henry',
                        avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
                    }
                }, {
                    comment: 'I can drive 10 miles, walk 50 feet. Turn around and before I know it, I\'d be back home. Or would I? I\'m not sure but that\'s just how it is.',
                    owner: {
                        id: 1,
                        username: 'Leslie Burton',
                        avatar: 'https://randomuser.me/api/portraits/women/35.jpg'
                    }
                }, {
                    comment: 'From this day on I shall be known as Bob. For Bob is a good name and I am good. But if you want you can just call me Sally.',
                    owner: {
                        id: 4,
                        username: 'Jared Henry',
                        avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
                    }
                }, {
                    comment: 'I can drive 10 miles, walk 50 feet. Turn around and before I know it, I\'d be back home. Or would I? I\'m not sure but that\'s just how it is.',
                    owner: {
                        id: 1,
                        username: 'Leslie Burton',
                        avatar: 'https://randomuser.me/api/portraits/women/35.jpg'
                    }
                }]
                this.loading = false
            }, 10)
        },
        sendComment () {
            // THIS IS A ÑAPA THAT SHOULD BE FIXED IN THE FUTURE
            this.comments.push(Object.assign({}, this.newComment))
            // API CALL SEND COMMENT
            this.newComment.comment = ''
            this.scrollBottom()
        },
        scrollBottom () {
            setTimeout(() => {
                this.timeline = document.getElementById('js-wall-timeline')
                this.timeline.scrollTop = this.timeline.scrollHeight
            }, 300)
        }
    }
}
</script>
