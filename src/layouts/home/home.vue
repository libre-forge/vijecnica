
<template src='./home.html'></template>

<style scoped src='./home.css'></style>

<script>
import Searchbox from '../../components/searchbox/searchbox'

export default {
    name: 'home',
    data () {
        return {
            displayCourses: false,
            pitch: 'Do not invest time in learning, burn it.'
        }
    },
    components: {
        Searchbox
    },
    methods: {
        isSearching: function () {
            this.displayCourses = true
        }
    }
}
</script>
