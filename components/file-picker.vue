<script>
import { XIcon, DocumentAddIcon } from '@vue-hero-icons/solid'

export default {
    components: { XIcon, DocumentAddIcon },
    props: {
        value: [String],
    },
    methods: {
        async openPicker(e) {
            const file = e.target.files[0]

            /* Make sure file exists */
            if (!file) return

            /* Read data */
            const data = await this.readData(file)

            this.$emit('input', data)

            /* upload the converted data */
            // const instance = await this.$cloudinary.upload(data)
        },

        readData(file) {
            return new Promise((resolve) => {
                const reader = new FileReader()
                reader.onloadend = () => {
                    resolve(reader.result)
                }
                reader.readAsDataURL(file)
            })
        },
    },
}
</script>

<template>
    <div class="relative overflow-hidden">
        <div
            v-if="!value"
            class="
                inset-0
                absolute
                border border-dashed border-light-border
                dark:border-dark-border
                group
            "
        >
            <document-add-icon
                class="
                    absolute
                    top-1/2
                    left-1/2
                    transform
                    -translate-x-1/2 -translate-y-1/2
                    w-8
                    h-8
                    group-hover:text-highlight
                    transition-colors
                "
            />
            <label for="picker" class="inset-0 absolute cursor-pointer"></label>
            <input
                id="picker"
                type="file"
                class="hidden"
                accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                aria-label="upload image button"
                @input="openPicker"
            />
        </div>
        <div v-else class="absolute inset-0">
            <div
                class="
                    bg-light-bg-main
                    dark:bg-dark-bg-main
                    absolute
                    top-2
                    right-2
                    cursor-pointer
                    z-10
                    rounded-full
                    p-0.5
                    group
                "
            >
                <x-icon
                    @click="$emit('input', null)"
                    class="group-hover:text-highlight transition-colors"
                />
            </div>
            <img
                :src="value"
                alt="File preview"
                class="object-cover w-full h-full"
            />
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
