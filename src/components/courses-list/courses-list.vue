
<template src='./courses-list.html'></template>

<style scoped src='./courses-list.css'></style>

<script>
export default {
    name: 'courses-list',
    props: {
        subject: {
            type: String,
            required: true
        }
    },
    watch: {
        subject: function (val) {
            console.log(val) // API CALL
        }
    }
}
</script>
