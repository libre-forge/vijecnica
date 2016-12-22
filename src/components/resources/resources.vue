<template src='./resources.html'></template>

<style scoped src='./resources.css'></style>

<script>
export default {
    name: 'resources',
    data () {
        return {
            newResource: {
                id: '35120310-7a56-4cd5-80e6-3b40c2814748',
                uri: '',
                title: '',
                description: '',
                mime: 'url',
                subject: this.subjectId,
                created_by: '588034cb-4c84-4f36-abcf-fa511aba0de3'
            },
            resourceUrl: ''
        }
    },
    props: {
        resources: {
            type: Array,
            required: true
        },
        subjectId: {
            type: String,
            required: true
        }
    },
    methods: {
        generateRandomText: function (pre, num, post) {
            return pre + Math.random().toString(36).substring(2, num) + post
        },
        addResource: function () {
            this.newResource.uri = this.resourceUrl
            this.newResource.title = this.generateRandomText('A random ', 30, ' text')
            this.newResource.description = this.generateRandomText('http://', 120, '.com')
            this.resources.push(Object.assign({}, this.newResource)) // MAKE API CALL
            this.resourceUrl = ''
        }
    }
}
</script>
