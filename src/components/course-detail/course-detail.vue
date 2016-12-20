
<template src='./course-detail.html'></template>

<style scoped src='./course-detail.css'></style>

<script>
export default {
    name: 'course-detail',
    props: {
        course: {
            type: Object,
            required: true
        }
    }
}
</script>
