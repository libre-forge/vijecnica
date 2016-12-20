
<template src='./searchbox.html'></template>

<style scoped src='./searchbox.css'></style>

<script>
export default {
    name: 'searchbox',
    data () {
        return {
            label: 'What do you want to learn?',
            courseName: ''
        }
    },
    methods: {
        findCourses: function (course) {
            console.log(course) // API CAll
            this.$emit('isSearching')
        }
    }
}
</script>
