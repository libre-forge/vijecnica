<template src="./add-course-wizard.html"></template>
<style src="./add-course-wizard.css"></style>

<script>
export default {
    name: 'AddCourseWizard',
    data () {
        return {
            newCourse: {
                title: '',
                description: '',
                numMembers: 5,
                subject1: '',
                subject2: '',
                subject3: '',
                subject4: '',
                subject5: ''
            }
        }
    },
    methods: {
        submit: function () {
            console.log(this.newCourse.title)
            console.log(this.newCourse.description)
            console.log(this.newCourse.numMembers)
            console.log(this.newCourse.subject1)
            console.log(this.newCourse.subject2)
            console.log(this.newCourse.subject3)
            console.log(this.newCourse.subject4)
            console.log(this.newCourse.subject5)
        }
    }
}
</script>

