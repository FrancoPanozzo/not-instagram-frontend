import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import { TButton, TAlert, TDropdown } from 'vue-tailwind/dist/components'

const components = {
    // ...You need to add the components you need here
    't-button': {
        component: TButton,
        props: {
            fixedClasses:
                'flex items-center justify-center px-4 py-2 transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
            classes:
                'text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600',
            variants: {
                secondary:
                    'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-blue-600',
                danger: 'text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600',
                success:
                    'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
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
                button: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
                wrapper: 'inline-flex flex-col',
                dropdownWrapper: 'relative z-10',
                dropdown:
                    'origin-top-left absolute -right-3 w-56 rounded shadow bg-white mt-2 p-4 flex flex-col',
                enterClass: 'opacity-0 scale-95',
                enterActiveClass: 'transition transform ease-out duration-100',
                enterToClass: 'opacity-100 scale-100',
                leaveClass: 'opacity-100 scale-100',
                leaveActiveClass: 'transition transform ease-in duration-75',
                leaveToClass: 'opacity-0 scale-95',
            },
        },
    },
}

Vue.use(VueTailwind, components)
