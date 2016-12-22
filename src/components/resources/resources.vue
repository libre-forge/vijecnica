<template src='./resources.html'></template>

<style scoped src='./resources.css'></style>

<script>
import loading from '../../components/loading/loading'

export default {
    name: 'resources',
    data () {
        return {
            resources: [],
            loading: false
        }
    },
    props: {
        subject: {
            type: String,
            required: true
        }
    },
    created () {
        this.fetchData()
    },
    components: {
        loading
    },
    computed: {
        filterLinks: function () {
            return this.resources.filter(link =>
                link.type === 'url'
            )
        },
        filterVideos: function () {
            return this.resources.filter(link =>
                link.type === 'video'
            )
        }
    },
    methods: {
        fetchData: function () {
            this.resources = [{
                url: 'https://github.com/vuejs/awesome-vue#official-resources',
                info: 'Official Resources',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#external-resources',
                info: 'External Resources',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#community',
                info: 'Vue Community',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#podcasts',
                info: 'Vue podcasts',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#official-examples',
                info: 'Vue Official examples',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#tutorials',
                info: 'Vue tutorials',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#development-tools',
                info: 'Development Tools',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#syntax-highlighting',
                info: 'syntax highlighting',
                type: 'url'
            }, {
                url: 'https://auth0.com/blog/2015/11/13/build-an-app-with-vuejs/',
                info: 'Build an App with Vue.js: From Authentication to Calling an API on Auth0 blog',
                type: 'video'
            }, {
                url: 'https://scotch.io/tutorials/create-a-github-file-explorer-using-vue-js',
                info: 'Create a GitHub File Explorer Using Vue.js on Scotch.io',
                type: 'video'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#official-resources',
                info: 'VueJs: Components on Coligo.io',
                type: 'video'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#official-resources',
                info: 'Develop a Reactive Invoice App using Vue.js on craigmckenna.com',
                type: 'video'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#official-resources',
                info: 'Building a Real-Time Web Analytics Dashboard with NodeJs, Socket.io, and VueJs on Coligo.io',
                type: 'video'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#official-resources',
                info: 'VueJS 2 French tutorial Français par Grafikart',
                type: 'url'
            }, {
                url: 'https://github.com/vuejs/awesome-vue#official-resources',
                info: 'Medium like Image Loading with Vue.js',
                type: 'url'
            }]
        }
    }
}
</script>
