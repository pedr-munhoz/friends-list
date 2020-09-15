import apiService from '~/services/apiService'

export const state = () => ({})

export const actions = {
  login({ state, commit, rootState }, user) {
    if (user.email === 'dev@test.com' && user.password === '123456') {
      const token = 'uh3h4039ut'
      commit('user/SET_EMAIL', user.email)
      commit('user/SET_TOKEN', token)
      apiService.setHeader(token)
      this.$router.push('/friends')
      return true
    }
    return false
  },

  logout({ state, commit, rootState }) {
    commit('user/SET_EMAIL', '')
    commit('user/SET_TOKEN', '')
    apiService.removeHeader()
    this.$router.push('/login')
  },

  fetchFriends({ state, commit, rootState }) {
    apiService
      .get('api/friends')
      .then((response) => {
        commit('friends/SET_LIST', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('friends/SET_LIST', [
          { id: '1', name: 'May', phone: '## #####-####', reference: 'work' },
          { id: '2', name: 'Tim', phone: '## #####-####', reference: 'school' },
        ])
      })
  },

  fetchRelatives({ state, commit, rootState }) {
    apiService
      .get('api/relatives')
      .then((response) => {
        commit('relatives/SET_LIST', response)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        commit('relatives/SET_LIST', [
          { id: '1', name: 'Mary', phone: '## #####-####', reference: 'mom' },
          { id: '2', name: 'Matt', phone: '## #####-####', reference: 'dad' },
        ])
      })
  },
}
