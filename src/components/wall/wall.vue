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
            comment: ''
        }
    },
    created () {
        this.fetchData()
    },
    components: {
        loading,
        comment
    },
    props: {
        data: {
            type: Object,
            required: true
        },
        comments: {
            type: Array,
            required: true
        },
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
            console.log('API CALL -> get post wall based on', this.id)
            this.loading = true
            // On success promise
            setTimeout(() => {
                console.log('Update wall', this.id)
                this.loading = false
            }, 3000)
        }
    }
}
</script>
