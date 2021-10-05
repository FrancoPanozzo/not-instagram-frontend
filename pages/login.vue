<template>
    <div>
        <h1>Login page title</h1>
        <button class="text-3xl bg-green-500" @click="login">Log in</button>
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
