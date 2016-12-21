<template src='./subject.html'></template>

<style scoped src='./subject.css'></style>

<script>
import subjectDetail from '../../components/subject-detail/subject-detail'
import wall from '../../components/wall/wall'

export default {
    name: 'subject',
    data: function () {
        return {
            user: {
                id: 1,
                username: 'Leslie Burton',
                avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
                email: 'leslie.burton45@example.com'
            }
        }
    },
    components: {
        subjectDetail,
        // resourcesList,
        wall
    }
}
</script>
