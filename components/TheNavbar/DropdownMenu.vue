<script>
import { CogIcon, UserIcon, LogoutIcon } from '@vue-hero-icons/solid'

export default {
    components: {
        CogIcon,
        UserIcon,
        LogoutIcon,
    },
    computed: {
        user() {
            return this.$auth?.user
        },
    },
    methods: {
        logout() {
            this.$auth.logout()
        },
    },
}
</script>

<template>
    <t-dropdown>
        <div
            class="overflow-hidden w-6 h-6 rounded-full cursor-pointer"
            slot="trigger"
            slot-scope="{
                mousedownHandler,
                focusHandler,
                blurHandler,
                keydownHandler,
                isShown,
            }"
            aria-label="User menu"
            aria-haspopup="true"
            @mousedown="mousedownHandler"
            @focus="focusHandler"
            @blur="blurHandler"
            @keydown="keydownHandler"
        >
            <img :src="user.picture" />
        </div>
        <t-button to="/my-profile" variant="secondary" class="mb-2">
            <UserIcon class="icon" /> <span>Profile</span>
        </t-button>
        <t-button to="/settings" variant="secondary">
            <CogIcon class="icon" /> <span>Settings</span>
        </t-button>
        <div class="block bg-light-border dark:bg-dark-border h-px my-4"></div>
        <t-button
            variant="text"
            class="hover:text-red-500 mx-auto"
            @click="logout"
        >
            <LogoutIcon class="icon" /> <span>Log out</span>
        </t-button>
    </t-dropdown>
</template>

<style scoped lang="scss">
.icon {
    @apply h-5 w-5 mr-1;
}

.router-link-exact-active {
    @apply bg-transparent text-highlight border-highlight cursor-default;
}
</style>
