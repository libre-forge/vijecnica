<template>
    <div class="miComponent">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped>
h1,
h2 {
    font-weight: normal;
    color: red;
}
</style>

<script>
export default {
    name: 'miComponent',
    data () {
        return {
            msg: 'Test!'
        }
    }
}
</script>
