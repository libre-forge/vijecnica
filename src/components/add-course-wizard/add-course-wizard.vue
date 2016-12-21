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
                pitch: '',
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
            console.log('Title: ', this.newCourse.title)
            console.log('Pitch: ', this.newCourse.pitch)
            console.log('Description: ', this.newCourse.description)
            console.log('Num. Members: ', this.newCourse.numMembers)
            console.log('Subjects: ', this.newCourse.subjects)
            // On success:
            // router.push({ name: 'course', params: { id: course.id } })
        }
    }
}
</script>

