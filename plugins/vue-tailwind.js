import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
    TButton,
    TAlert,
    TDropdown,
    TToggle,
    TInput,
    TTextarea,
} from 'vue-tailwind/dist/components'

const components = {
    // ...You need to add the components you need here
    't-button': {
        component: TButton,
        props: {
            fixedClasses:
                'flex items-center justify-center px-4 py-2 transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed rounded',
            classes:
                'text-dark-t-main bg-highlight border border-transparent shadow-sm hover:bg-highlight-hov',
            variants: {
                text: 'text-light-t-main dark:text-dark-t-main px-0 py-0',
                success:
                    'text-white bg-green-500 border border-transparent shadow-sm hover:bg-green-600',
                secondary:
                    'bg-transparent border border-light-border dark:border-dark-border text-light-t-main dark:text-dark-t-main',
            },
        },
    },
    't-alert': {
        component: TAlert,
        props: {
            fixedClasses: {
                wrapper:
                    'relative flex items-center p-4 border-l-4  rounded shadow-sm',
                body: 'flex-grow',
                close: 'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
                closeIcon: 'fill-current h-4 w-4',
            },
            classes: {
                wrapper: 'bg-blue-50 border-blue-500',
                body: 'text-blue-700',
                close: 'text-blue-500 hover:bg-blue-200',
            },
            variants: {
                danger: {
                    wrapper: 'bg-red-50 border-red-500',
                    body: 'text-red-700',
                    close: 'text-red-500 hover:bg-red-200',
                },
                success: {
                    wrapper: 'bg-green-50 border-green-500',
                    body: 'text-green-700',
                    close: 'text-green-500 hover:bg-green-200',
                },
            },
        },
    },
    't-dropdown': {
        component: TDropdown,
        props: {
            classes: {
                button: 'block px-4 py-2 text-light-t-main dark:text-dark-t-main transition duration-100 ease-in-out bg-dark-bg-card border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
                wrapper: 'inline-flex flex-col',
                dropdownWrapper: 'relative z-10',
                dropdown:
                    'origin-top-left absolute -right-3 w-56 rounded shadow bg-light-bg-main dark:bg-dark-bg-card mt-2 p-4 flex flex-col',
                enterClass: 'opacity-0 scale-95',
                enterActiveClass: 'transition transform ease-out duration-100',
                enterToClass: 'opacity-100 scale-100',
                leaveClass: 'opacity-100 scale-100',
                leaveActiveClass: 'transition transform ease-in duration-75',
                leaveToClass: 'opacity-0 scale-95',
            },
        },
    },
    't-toggle': {
        component: TToggle,
        props: {
            fixedClasses: {
                wrapper:
                    'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
                wrapperChecked:
                    'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200  border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
                wrapperDisabled:
                    'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
                wrapperCheckedDisabled:
                    'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed border-2 border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
                button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
                buttonChecked:
                    'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
                checkedPlaceholder: 'inline-block',
                uncheckedPlaceholder: 'inline-block',
            },
            classes: {
                wrapper:
                    'bg-gray-100 rounded-full border-2 border-transparent focus:outline-none',
                wrapperChecked: 'bg-highlight rounded-full',
                wrapperDisabled:
                    'bg-gray-100 rounded-full border-2 border-transparent focus:outline-none',
                wrapperCheckedDisabled: 'bg-blue-500',
                button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
                buttonChecked:
                    'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-highlight text-xs',
                checkedPlaceholder:
                    'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
                uncheckedPlaceholder:
                    'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
            },
        },
    },
    't-input': {
        component: TInput,
        props: {
            fixedClasses:
                'block w-full px-3 py-2 transition duration-100 ease-in-out border  shadow-sm focus:ring-2 focus:ring-highlight focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
            classes:
                'text-light-t-main dark:text-dark-t-main placeholder-light-t-muted dark:placeholder-dark-t-muted bg-light-bg-main dark:bg-dark-bg-main border-light-border dark:border-dark-border focus:border-highlight',
            variants: {
                danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
                success:
                    'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
            },
        },
    },
    't-textarea': {
        component: TTextarea,
        props: {
            fixedClasses:
                'block w-full px-3 py-2 transition duration-100 ease-in-out border  shadow-sm focus:ring-2 focus:ring-highlight focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
            classes:
                'text-light-t-main dark:text-dark-t-main placeholder-light-t-muted dark:placeholder-dark-t-muted bg-light-bg-main dark:bg-dark-bg-main border-light-border dark:border-dark-border focus:border-highlight',
            variants: {
                danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
                success:
                    'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
            },
        },
    },
}

Vue.use(VueTailwind, components)
