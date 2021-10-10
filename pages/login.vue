<template>
    <div class="container">
        <h1>Welcome to Peroniagram</h1>
        <t-button @click="login">Log in</t-button>
    </div>
</template>

<script>
export default {
    layout: 'auth',

    methods: {
        login() {
            this.$auth.loginWith('auth0')
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    @apply flex flex-col items-center justify-center w-full;
}

h1 {
    @apply text-4xl mb-6;
}
</style>
