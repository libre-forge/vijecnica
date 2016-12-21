<template src='./detail-info.html'></template>

<style scoped src='./detail-info.css'></style>

<script>
import loading from '../../components/loading/loading'

export default {
    name: 'detail-info',
    data () {
        return {
            id: this.$route.params.id,
            loading: false
        }
    },
    created () {
        this.fetchData()
    },
    components: {
        loading
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            console.log('API CALL -> get post data based on', this.id)
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
