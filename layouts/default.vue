<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
    components: {
        TheNavbar,
        TheFooter,
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
        <the-footer />
    </div>
</template>

<style scoped lang="scss">
.app {
    @apply flex flex-col min-h-screen;
}

.outer-container {
    @apply flex-1 p-6;
}

.inner-container {
    @apply max-w-screen-xl  mx-auto w-full;
}
</style>
