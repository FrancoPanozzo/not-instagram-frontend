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

                // When logging in try to save the user...
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

                // ... and store it using VUEX
                if (res.status === 200) {
                    this.$store.dispatch('user/setUser', res.data)
                } else {
                    throw res
                }
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>

<template>
    <div class="default-layout__app">
        <the-navbar />
        <div class="default-layout__outer-container">
            <div class="default-layout__inner-container">
                <nuxt />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
body {
    @apply text-light-t-main bg-light-bg-main transition-colors dark:text-dark-t-main dark:bg-dark-bg-main;
}

.default-layout__app {
    @apply flex flex-col min-h-screen;
}

.default-layout__outer-container {
    @apply flex-1 p-6 flex;
}

.default-layout__inner-container {
    @apply max-w-screen-xl  mx-auto w-full flex-1 flex-shrink-0;
}
</style>
