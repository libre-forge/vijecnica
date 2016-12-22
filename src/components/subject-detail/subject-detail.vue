<template src='./subject-detail.html'></template>

<style scoped src='./subject-detail.css'></style>

<script>
import loading from '../../components/loading/loading'

export default {
    name: 'subject-detail',
    data () {
        return {
            subject: {},
            loading: false
        }
    },
    components: {
        loading
    },
    created () {
        this.fetchData()
    },
    methods: {
        fetchData () {
            this.loading = true
            // TODO: Call to the API to get the subject
            setTimeout(() => {
                this.subject = {
                    id: 1,
                    name: 'Introduction',
                    description: 'An introduction to GraphQL',
                    finished_date: '2016-12-21T17:26:31+01:00',
                    created_by: {
                        id: 1,
                        username: 'Leslie Burton',
                        avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                        email: 'leslie.burton45@example.com'
                    },
                    course: {
                        id: 2,
                        title: 'GraphSQL'
                    }
                }
                this.loading = false
            }, 3000)
        }
    }
}
</script>
