<script>
export default {
    computed: {
        user() {
            return this.$auth
        },
    },
    methods: {
        async debug() {
            const res = await this.$api.get('users/1')
            console.log(res.data)
            console.log(this.$auth.user)
        },
    },
}
</script>

<template>
    <div class="test">
        <t-button @click="debug">Click me</t-button>
    </div>
</template>

<style scoped lang="scss"></style>
