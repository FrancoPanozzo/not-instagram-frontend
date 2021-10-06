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
    <div :class="{ 'dark-mode': true, 'app-outer-wrap': true }">
        <the-navbar />
        <div class="app-inner-wrap">
            <nuxt />
        </div>
        <the-footer />
    </div>
</template>

<style scoped lang="scss">
.app-outer-wrap {
    @apply flex flex-col min-h-screen;
}

.app-inner-wrap {
    @apply flex-1;
}
</style>
