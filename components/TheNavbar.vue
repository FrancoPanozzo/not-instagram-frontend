<script>
export default {}
</script>

<template>
    <div class="wrapper">
        <div class="logo-wrapper">
            <nuxt-link to="/">Peroniagram</nuxt-link>
        </div>
        <nav class="nav-menu">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/">My Profile</nuxt-link>
            <nuxt-link to="/">Settings</nuxt-link>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    @apply flex items-center justify-between py-3 px-6 bg-blue-300;
}

.logo-wrapper {
    @apply text-xl;
}

.logo-wrapper a {
    @apply hover:text-blue-700 transition-colors;
}

.nav-menu {
    @apply flex items-center justify-between;
}

.nav-menu a:not(:first-child) {
    @apply ml-6;
}

.nav-menu a {
    @apply block hover:text-blue-700 transition-colors;
}
</style>
