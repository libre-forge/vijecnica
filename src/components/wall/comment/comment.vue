<template src='./comment.html'></template>

<style scoped src='./comment.css'></style>

<script>
export default {
    name: 'comment',
    props: {
        comment: {
            type: Object,
            required: true
        },
        user: {
            type: Object,
            required: false
        }
    }
}
</script>
