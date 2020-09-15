export const state = () => ({
  email: '',
  token: '',
})

export const mutations = {
  SET_EMAIL(state, value) {
    state.email = value
  },
  SET_TOKEN(state, value) {
    state.token = value
  },
}

export const getters = {
  get(state) {
    return { email: state.email, token: state.token }
  },
}
