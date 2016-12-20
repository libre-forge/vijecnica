
<template src='./searchbox.html'></template>

<style scoped src='./searchbox.css'></style>

<script>
export default {
    name: 'searchbox',
    data () {
        return {
            label: 'What do you want to learn?',
            displayCourses: false,
            courseName: '',
            subject: ''
        }
    },
    methods: {
        getCourses: function (subject) {
            if (subject) {
                this.displayCourses = true
                this.$emit('getcourses', subject)
            }
            return
        }
    }
}
</script>
