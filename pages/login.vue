<template>
    <div>
        <h1>Welcome to Peroniagram</h1>
        <button class="btn" @click="login">Log in</button>
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
.btn {
    @apply bg-blue-700 text-blue-100 rounded-md shadow-md hover:scale-110;
}
</style>
