import apiService from '~/services/apiService'

export const state = () => ({})

export const actions = {
  fetchFriends({ state, commit, rootState }) {
    apiService
      .get('url')
      .then((response) => {
        commit('friends/SET_LIST', response)
      })
      .catch((error) => {
        console.log(error)
        commit('friends/SET_LIST', [
          {
            id: '1',
            name: 'John',
            phone: '## #####-####',
            reference: 'junior high',
          },
          {
            id: '2',
            name: 'Jane',
            phone: '## #####-####',
            reference: 'college',
          },
          { id: '3', name: 'May', phone: '## #####-####', reference: 'work' },
          { id: '4', name: 'Marcus', phone: '## #####-####', reference: '' },
        ])
      })
  },

  fetchRelatives({ state, commit, rootState }) {
    apiService
      .get('url')
      .then((response) => {
        commit('relatives/SET_LIST', response)
      })
      .catch((error) => {
        console.log(error)
        commit('relatives/SET_LIST', [
          { id: '1', name: 'Mary', phone: '## #####-####', reference: 'mom' },
          { id: '2', name: 'Matt', phone: '## #####-####', reference: 'dad' },
        ])
      })
  },
}
