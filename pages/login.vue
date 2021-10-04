<template>
    <div>
        <h1>Login page title</h1>
        <button @click="login">Log in</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$auth.loginWith('auth0')
        },
    },
}
</script>
