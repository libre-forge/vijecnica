
<template src='./login-form.html'></template>

<style scoped src='./login-form.css'></style>

<script>
import { router } from '../../router'

export default {
    name: 'login-form',
    data () {
        return {
            login: {}
        }
    },
    methods: {
        loginAuth: function () {
            // API CALL AND AUTH
            console.log(this.login)
            router.push({ name: 'home' })
        }
    }
}
</script>
