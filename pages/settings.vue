<script>
export default {
    methods: {
        logout() {
            this.$auth.logout()
        },
    },
}
</script>

<template>
    <div>
        <h1>Settings</h1>
        <button @click="logout">Log out</button>
    </div>
</template>

<style scoped lang="scss"></style>
