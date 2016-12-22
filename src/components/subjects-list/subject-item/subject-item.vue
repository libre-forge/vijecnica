<template src='./subject-item.html'></template>

<style scoped src='./subject-item.css'></style>

<script>
export default {
    name: 'subject-item',
    props: {
        subject: {
            type: Object
        },
        courseId: {}
    }
}
</script>
