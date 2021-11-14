<script>
import TheNavbar from '@/components/TheNavbar'

export default {
    components: {
        TheNavbar,
    },
    mounted() {
        this.saveUser()
    },
    methods: {
        async saveUser() {
            try {
                const user = this.$auth.user

                // When logging in try to save the user (won't save if it's not new)
                const res = await this.$api.post('users', {
                    ...user,
                    first_name: user.given_name || '',
                    last_name: user.family_name || '',
                    username: user.nickname || '',
                    profile_pic: user.picture || null,
                    is_email_verified: user.email_verified,
                    DOB: new Date(),
                    ui_theme: this.$store.state.UI.theme || 'light',
                })
            } catch (error) {
                console.log(error)
            }
        },
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
    @apply flex-1 p-6 flex;
}

.inner-container {
    @apply max-w-screen-xl  mx-auto w-full flex-1 flex-shrink-0;
}
</style>
