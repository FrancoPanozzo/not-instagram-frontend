<template>
    <div class="wrapper">
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
.wrapper {
    @apply flex flex-col items-center justify-center w-full;
}

h1 {
    @apply text-4xl mb-6;
}

.btn {
    @apply bg-blue-700 text-blue-100 px-3 py-2 rounded-md shadow-md hover:bg-blue-900 transition-all;
}
</style>
