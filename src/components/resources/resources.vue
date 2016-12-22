<template src='./resources.html'></template>

<style scoped src='./resources.css'></style>

<script>
export default {
    name: 'resources'
    // props: {
    //     id: {
    //         type: String,
    //         default: 'subjects'
    //     },
    //     name: {
    //         type: String,
    //         default: 'subjects'
    //     },
    //     value: {
    //         type: Array
    //     }
    // },
    // data () {
    //     return {
    //         newSubject: ''
    //     }
    // },
    // methods: {
    //     addSubject: function () {
    //         if (this.newSubject.trim() !== '') {
    //             var subjects = this.value.slice()
    //             subjects.push(this.newSubject.trim())
    //             this.$emit('input', subjects)
    //         }
    //         this.newSubject = ''
    //     },
    //     removeSubject: function (index) {
    //         var subjects = this.value.slice()
    //         subjects.splice(index, 1)
    //         this.$emit('input', subjects)
    //     }
    // }
}
</script>
