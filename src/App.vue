<template>
<div id="courses-lists" v-bind:class="{ 'active': displayCourses }">
    <img src="./assets/logo.gif">
    <h1>{{ pitch }}</h1>
    <searchbox v-on:isSearching="isSearching"></searchbox>
    <router-link to="/test">Go to Test</router-link>
    <router-view></router-view>
</div>
</template>

<script>
import Searchbox from './components/searchbox/searchbox'

export default {
    name: 'courses-lists',
    data () {
        return {
            displayCourses: false,
            pitch: 'Do not invest time in learning, burn it.'
        }
    },
    components: {
        Searchbox
    },
    methods: {
        isSearching: function () {
            this.displayCourses = true
        }
    }
}
</script>

<style>
#courses-lists {
    align-items: center;
    background: linear-gradient(to bottom right, #fb83fa 0%, #b441fc 37%, #3d86ed 100%);
    display: flex;
    color: white;
    flex-direction: column;
    font-family: sans-serif;
    justify-content: center;
    min-height: 100vh;
    transition: all .3s ease-in;
}

#courses-lists.active {
    background: linear-gradient(to top left, #fb83fa 0%, #b441fc 37%, #3d86ed 100%);
}
</style>
