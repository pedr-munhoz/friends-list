export const state = () => ({
  list: [],
})

export const mutations = {
  SET_LIST(state, value) {
    state.list = value
  },
}

export const getters = {
  get(state) {
    return state.list
  },
}
