
<template src='./course-card.html'></template>

<style scoped src='./course-card.css'></style>

<script>
export default {
    name: 'course-card',
    props: {
        course: {
            type: Object,
            required: true
        }
    }
}
</script>
