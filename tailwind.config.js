module.exports = {
    mode: 'jit',
    purge: {
        mode: 'layers',
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            // TypeScript
            'plugins/**/*.ts',
            'nuxt.config.ts',
        ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                highlight: 'rgb(255, 122, 0)',
                'highlight-hov': 'rgb(230, 110, 0)',

                // Semantic named colors by theme
                light: {
                    // For text
                    t: {
                        main: 'rgb(15, 20, 25)',
                        muted: 'rgb(83, 100, 113)',
                    },
                    bg: {
                        main: 'rgb(255, 255, 255)',
                        secondary: 'rgb(239, 243, 244);',
                        card: 'rgb(247, 249, 249)',
                        'hover-soft': 'rgba(0, 0, 0, 0.03)',
                        'hover-hard': 'rgba(15, 20, 25, 0.1)',
                    },
                    border: 'rgb(239, 243, 244)',
                },
                dark: {
                    // For text
                    t: {
                        main: 'rgb(255, 255, 255)',
                        muted: 'rgb(136 153 166)',
                    },
                    bg: {
                        main: 'rgb(21, 32, 43)',
                        secondary: 'rgb(37, 51, 65)',
                        card: 'rgb(25, 39, 52)',
                        'hover-soft': 'rgba(255, 255, 255, 0.03)',
                        'hover-hard': 'rgba(15, 20, 25, 0.1)',
                    },
                    border: 'rgb(56, 68, 77)',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
