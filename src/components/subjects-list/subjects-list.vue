<template src='./subjects-list.html'></template>

<style scoped src='./subjects-list.css'></style>

<script>
import subjectItem from './subject-item/subject-item'
// import gql from 'graphql-tag'
//
// const subjectList = gql`
//     {
//         subjects {
//             id
//             title
//             description
//             created_by
//             finished_date
//         }
//     }
// `

export default {
    name: 'subjects-list',
    data: function () {
        return {
            subjects: [],
            courseId: 0
        }
    },
    components: {
        subjectItem
    }
}
</script>
