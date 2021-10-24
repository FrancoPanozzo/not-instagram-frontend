<script>
export default {}
</script>

<template>
    <div class="app">
        <div class="hero"></div>
        <nuxt class="form" />
    </div>
</template>

<style scoped lang="scss">
.app {
    @apply flex min-h-screen bg-light-bg-card text-light-t-main dark:bg-dark-bg-main dark:text-dark-t-main;
}

.app > * {
    @apply flex-1;
}

.hero {
}

.form {
    @apply bg-light-bg-main dark:bg-dark-bg-card;
}
</style>
