<template>
    <div>
        <h1>Home</h1>
        <button @click="logout">Log out</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$auth.logout()
        },
    },
}
</script>
