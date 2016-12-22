
<template src='./nav.html'></template>

<style scoped src='./nav.css'></style>

<script>
import user from '../../lib/auth'

export default {
    name: 'navigation',
    data: function () {
        return {
            username: user.username(),
            avatar: user.avatar()
        }
    }

}
</script>
