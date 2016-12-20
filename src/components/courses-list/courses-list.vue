


<template src='./courses-list.html'></template>



<style scoped src='./courses-list.css'></style>

<script>
export default {
    name: 'courses-list',
    data: function () {
        return {
            courses: [{
                name: 'GraphSQL',
                description: 'Learn GrapSQL',
                members: 5,
                members_limit: 10,
                status: 'active'
            }, {
                name: 'Browser Internal',
                description: 'Use the platform',
                members: 5,
                members_limit: 10,
                status: 'active'
            }, {
                name: 'Cocina con Bertín',
                description: 'Bertin y Arévalo alegrarán tu cocina',
                members: 5,
                members_limit: 10,
                status: 'active'
            }]
        }
    },
    props: {
        subject: {
            type: String,
            required: true
        }
    },
    watch: {
        subject: function (val) {
            console.log(val) // API CALL and overwrite courses
        }
    }
}
</script>
