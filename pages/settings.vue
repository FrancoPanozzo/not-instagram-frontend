<script>
import { MoonIcon, SunIcon } from '@vue-hero-icons/solid'
export default {
    components: {
        MoonIcon,
        SunIcon,
    },
    data() {
        return {
            isDarkMode: false,
        }
    },
    watch: {
        isDarkMode(val) {
            if (val) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
    },
}
</script>

<template>
    <div>
        <div class="flex align-center">
            <t-toggle name="dark-mode-toggle" v-model="isDarkMode" checked>
                <template slot="default" slot-scope="{ isChecked }">
                    <span
                        class="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            w-full
                            h-full
                            transition-opacity
                        "
                        :class="{
                            'opacity-100 ease-in duration-200': !isChecked,
                            'opacity-0 ease-out duration-100': isChecked,
                        }"
                    >
                        <SunIcon class="icon" />
                    </span>
                    <span
                        class="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            w-full
                            h-full
                            transition-opacity
                        "
                        :class="{
                            'opacity-100 ease-in duration-200': isChecked,
                            'opacity-0 ease-out duration-100': !isChecked,
                        }"
                    >
                        <MoonIcon class="icon" />
                    </span>
                </template>
            </t-toggle>
            <label for="dark-theme-toggle" class="ml-2 select-none"
                >Dark theme</label
            >
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
