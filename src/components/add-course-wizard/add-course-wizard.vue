<template src="./add-course-wizard.html"></template>
<style src="./add-course-wizard.css"></style>

<script>
import subjectsInput from '../subjects-input/subjects-input'
export default {
    name: 'AddCourseWizard',
    data () {
        return {
            newCourse: {
                title: '',
                description: '',
                numMembers: 5,
                subjects: []
            }
        }
    },
    components: {
        subjectsInput
    },
    methods: {
        submit: function () {
            console.log(this.newCourse.title)
            console.log(this.newCourse.description)
            console.log(this.newCourse.numMembers)
            // On success:
            // router.push({ name: 'course', params: { id: course.id } })
        }
    }
}
</script>

