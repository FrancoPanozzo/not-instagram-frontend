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
    @apply flex min-h-screen bg-dark-bg-main text-dark-t-main;
}

.app > * {
    @apply flex-1;
}

.hero {
}

.form {
    @apply bg-dark-bg-card;
}
</style>
