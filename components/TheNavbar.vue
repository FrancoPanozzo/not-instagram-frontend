<script>
import {
    HomeIcon,
    ChatAltIcon,
    StarIcon,
    PlusSmIcon,
} from '@vue-hero-icons/solid'

import DropwdownMenu from '@/components/TheNavbar/DropdownMenu.vue'

export default {
    components: {
        DropwdownMenu,
        HomeIcon,
        ChatAltIcon,
        StarIcon,
        PlusSmIcon,
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
                <nuxt-link to="/" class="block py-1 select-none"
                    >Peroniagram</nuxt-link
                >
            </div>
            <nav class="nav-menu">
                <nuxt-link to="/test">Test</nuxt-link>
                <nuxt-link to="/new-post" class="link"
                    ><PlusSmIcon class="icon"
                /></nuxt-link>
                <nuxt-link to="/chat" class="link"
                    ><ChatAltIcon class="icon"
                /></nuxt-link>
                <nuxt-link to="/favorites" class="link"
                    ><StarIcon class="icon" />
                </nuxt-link>
                <dropwdown-menu />
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
.TheNavbar {
    @apply py-2 px-6 border-b border-light-border dark:border-dark-border;
}

.container {
    @apply flex items-center justify-between mx-auto w-full max-w-screen-xl;
}

.logo-container {
    @apply text-xl text-light-t-main dark:text-dark-t-main;
}

.nav-menu {
    @apply flex items-center justify-between;
}

.nav-menu > * {
    @apply ml-4;
}

.icon {
    @apply h-5 w-5;
}

.link {
    @apply text-light-t-main dark:text-dark-t-main;
}

.link.nuxt-link-exact-active {
    @apply text-highlight cursor-default;
}
</style>
