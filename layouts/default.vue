<script>
import TheNavbar from '@/components/TheNavbar'

export default {
    components: {
        TheNavbar,
    },
}
</script>

<template>
    <div class="app">
        <the-navbar />
        <div class="outer-container">
            <div class="inner-container">
                <nuxt />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app {
    @apply flex flex-col min-h-screen text-light-t-main bg-light-bg-main transition-colors dark:text-dark-t-main dark:bg-dark-bg-main;
}

.outer-container {
    @apply flex-1 p-6;
}

.inner-container {
    @apply max-w-screen-xl  mx-auto w-full;
}
</style>
