<template src='./subjects-input.html'></template>

<style scoped src='./subjects-input.css'></style>

<script>
export default {
    name: 'subjectsInput',
    props: {
        id: {
            type: String,
            default: 'subjects'
        },
        name: {
            type: String,
            default: 'subjects'
        },
        value: {
            type: Array
        }
    },
    data () {
        return {
            newSubject: ''
        }
    },
    methods: {
        addSubject: function () {
            var subjects = this.value.slice()
            subjects.push(this.newSubject)
            this.$emit('input', subjects)
            this.newSubject = ''
        },
        removeSubject: function (index) {
            var subjects = this.value.slice()
            subjects.splice(index, 1)
            this.$emit('input', subjects)
        }
    }
}
</script>
