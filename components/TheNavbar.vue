<script>
import { HomeIcon, ChatAltIcon, StarIcon } from '@vue-hero-icons/solid'

import DropwdownMenu from '@/components/TheNavbar/DropdownMenu.vue'

export default {
    components: {
        DropwdownMenu,
        HomeIcon,
        ChatAltIcon,
        StarIcon,
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
                <nuxt-link to="/" class="block py-1">Peroniagram</nuxt-link>
            </div>
            <nav class="nav-menu">
                <nuxt-link to="/"><HomeIcon class="icon" /> </nuxt-link>
                <nuxt-link to="/chat"><ChatAltIcon class="icon" /> </nuxt-link>
                <nuxt-link to="/favorites"
                    ><StarIcon class="icon" />
                </nuxt-link>
                <dropwdown-menu />
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
.TheNavbar {
    @apply py-2 px-6 bg-blue-600;
}

.container {
    @apply flex items-center justify-between mx-auto w-full max-w-screen-xl;
}

.logo-container {
    @apply text-xl text-white;
}

.nav-menu {
    @apply flex items-center justify-between;
}

.nav-menu > * {
    @apply ml-4;
}

.icon {
    @apply h-5 w-5 text-white;
}
</style>
