<script>
import FilePicker from '~/components/file-picker.vue'
import { ArrowRightIcon } from '@vue-hero-icons/solid'

export default {
    components: { FilePicker, ArrowRightIcon },
    data() {
        const postTemplate = {
            title: '',
            imgSrc: null,
            description: '',
        }
        return {
            postTemplate,
            newPost: { ...postTemplate },
        }
    },
    methods: {
        handleSubmit() {
            try {
                //API CALL HERE
                console.log(this.newPost)
            } catch (error) {
                console.log(error)
            }

            this.newPost = { ...this.postTemplate }
        },
    },
}
</script>

<template>
    <form
        class="flex flex-col relative mx-auto lg:w-1/2 md:max-w-xl min-h-full"
        @submit.prevent="handleSubmit"
    >
        <t-input
            placeholder="Title"
            type="text"
            class="mb-4"
            v-model="newPost.title"
        />
        <file-picker class="mb-4 flex-1" v-model="newPost.imgSrc" />
        <t-textarea
            placeholder="Description"
            class="mb-4 resize-none h-24"
            v-model="newPost.description"
        />
        <t-button type="submit" class="md:self-end">
            <span>Share</span>
            <arrow-right-icon class="h-4 w-4 ml-2" />
        </t-button>
    </form>
</template>

<style scoped lang="scss"></style>
