<script>
import TheNavbar from '@/components/TheNavbar'

export default {
    components: {
        TheNavbar,
    },
}
</script>

<template>
    <div :class="{ 'dark-mode': true, app: true }">
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
    @apply flex flex-col min-h-screen bg-blue-200 transition-colors dark:text-white dark:bg-blue-900;
}

.outer-container {
    @apply flex-1 p-6;
}

.inner-container {
    @apply max-w-screen-xl  mx-auto w-full;
}
</style>
