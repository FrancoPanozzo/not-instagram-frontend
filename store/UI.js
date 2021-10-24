export const state = () => ({
    theme: 'dark',
})

export const mutations = {
    setTheme(state, val) {
        state.theme = val
    },
}

export const getters = {
    theme(state) {
        return state.theme
    },
}

export const actions = {
    setTheme({ commit }, theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            commit('setTheme', theme)
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark')
            commit('setTheme', theme)
        }
    },
}
