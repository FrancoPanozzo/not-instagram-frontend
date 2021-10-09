<script>
export default {
    computed: {
        user() {
            return this.$auth?.user
        },
    },
    methods: {
        log() {
            console.log(this.user)
        },
    },
}
</script>

<template>
    <div>
        <h1>My profile</h1>
        <div>{{ user.name || user.nickname || user.username }}</div>
        <div @click="log">Log user</div>
    </div>
</template>

<style scoped lang="scss"></style>
