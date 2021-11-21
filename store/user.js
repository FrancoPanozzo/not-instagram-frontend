export const state = () => ({
    user: null,
})

export const mutations = {
    setUser(state, val) {
        state.theme = val
    },
}

export const getters = {
    user(state) {
        return state.user
    },
}

export const actions = {
    setUser({ commit }, user) {
        commit('setUser', user)
    },
}
