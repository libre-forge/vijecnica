<template src='./subject-detail.html'></template>

<style scoped src='./subject-detail.css'></style>

<script>
export default {
    name: 'subject-detail',
    props: {
        subject: {
            type: Object,
            required: true
        }
    }
}
</script>
