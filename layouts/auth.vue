<script>
export default {}
</script>

<template>
    <div :class="{ 'dark-mode': true, 'app-outer-wrap': true }">
        <div class="hero"></div>
        <nuxt />
    </div>
</template>

<style scoped lang="scss">
.app-outer-wrap {
    @apply flex min-h-screen;
}

.app-outer-wrap > * {
    @apply flex-1;
}

.hero {
    @apply bg-blue-800;
}
</style>
