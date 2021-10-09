<script>
import { CogIcon } from '@vue-hero-icons/solid'
export default {
    components: {
        CogIcon,
    },
    computed: {
        user() {
            return this.$auth?.user
        },
    },
}
</script>

<template>
    <div class="TheNavbar">
        <div class="container">
            <div class="logo-container">
                <nuxt-link to="/">Peroniagram</nuxt-link>
            </div>
            <nav class="nav-menu">
                <nuxt-link to="/settings">
                    <CogIcon class="h-6 w-6" />
                </nuxt-link>
                <nuxt-link to="/my-profile">
                    <div class="profile-img-wrap">
                        <img :src="user.picture" />
                    </div>
                </nuxt-link>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
.TheNavbar {
    @apply py-3 px-6 bg-blue-300;
}

.container {
    @apply flex items-center justify-between mx-auto w-full max-w-screen-xl;
}

.logo-container {
    @apply text-xl;
}

.logo-container a {
    @apply hover:opacity-80 transition-colors;
}

.nav-menu {
    @apply flex items-center justify-between;
}

.nav-menu a:not(:first-child) {
    @apply ml-4;
}

.nav-menu a {
    @apply block hover:opacity-80 transition-colors;
}

.profile-img-wrap {
    @apply overflow-hidden w-6 h-6 rounded-full;
}
</style>
