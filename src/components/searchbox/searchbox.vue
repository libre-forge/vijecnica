
<template src='./searchbox.html'></template>

<style scoped src='./searchbox.css'></style>

<script>
export default {
    name: 'searchbox',
    data () {
        return {
            label: 'What do you want to learn?',
            displayCourses: false,
            courseName: ''
        }
    },
    methods: {
        findCourses: function (course) {
            this.displayCourses = true
            console.log(course) // API CAll
        }
    }
}
</script>
