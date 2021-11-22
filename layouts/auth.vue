<script>
export default {}
</script>

<template>
    <div class="auth-layout__app">
        <div class="auth-layout__hero"></div>
        <nuxt class="auth-layout__form" />
    </div>
</template>

<style lang="scss">
.auth-layout__app {
    @apply flex min-h-screen bg-light-bg-card text-light-t-main dark:bg-dark-bg-main dark:text-dark-t-main;
}

.auth-layout__app > * {
    @apply flex-1;
}

.auth-layout__hero {
}

.auth-layout__form {
    @apply bg-light-bg-main dark:bg-dark-bg-card;
}
</style>
