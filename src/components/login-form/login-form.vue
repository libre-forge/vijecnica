
<template src='./login-form.html'></template>

<style scoped src='./login-form.css'></style>

<script>
import gql from 'graphql-tag'
import { router } from '../../router'
import storage from '../../lib/localStorage'

const loginUser = gql`
    mutation userLogin($credentials: Credentials) {
        login(credentials: $credentials) {
            token
            user {
                id
                email
                name
            }
        }
    }
`

const MSG_ERROR = `You can no access.
Your username/password are incorrect`

export default {
    name: 'login-form',
    data () {
        return {
            login: {},
            errors: ''
        }
    },
    methods: {
        loginAuth: function () {
            const _this = this

            this.$apollo.mutate({
                mutation: loginUser,
                variables: {
                    credentials: {
                        username: this.login.username,
                        password: this.login.password
                    }
                }
            })
            .then(res => {
                if (!res.data.login.token) {
                    throw new Error(MSG_ERROR)
                }

                delete res.data.login.user.__typename
                storage.set(
                    'user',
                    res.data.login.user
                )

                storage.set(
                    'token',
                    res.data.login.token
                )

                if (_this.$route.query.redirect) {
                    return router.push({
                        path: _this.$route.query.redirect
                    })
                }

                return router.push({ name: 'home' })
            })
            .catch(res => {
                window.alert(MSG_ERROR)
                console.error('You can not access', res.message)
            })
        }
    }
}
</script>
