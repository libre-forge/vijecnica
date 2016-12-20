<template>
    <div id="app">
        <img src="./assets/logo.png">
        <hello></hello>
        <!-- Enlace para acceder a una ruta nueva, que este registrada en Vue -->
        <router-link to="/test">Go to Test</router-link>
        <!-- // Lugar donde se renderizaran las vistas de los routers -->
        <router-view></router-view>
    </div>
</template>

<script>
import Hello from './components/Hello/Hello'

export default {
    name: 'app',
    components: {
        Hello
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
