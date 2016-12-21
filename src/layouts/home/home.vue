<template src='./home.html'></template>

<style scoped src='./home.css'></style>

<script>
import Searchbox from '../../components/searchbox/searchbox'
import coursesList from '../../components/courses-list/courses-list'

export default {
    name: 'home',
    data () {
        return {
            pitch: 'Do not invest time in learning, burn it.',
            subject: '',
            displayResults: false
        }
    },
    components: {
        Searchbox,
        coursesList
    },
    methods: {
        getCourses: function (subject) {
            this.subject = subject
            this.displayResults = true
        }
    }
}
</script>
