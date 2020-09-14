export const state = () => ({
  list: [
    { id: '1', name: 'Mary', phone: '## #####-####', reference: 'mom' },
    { id: '2', name: 'Matt', phone: '## #####-####', reference: 'dad' },
  ],
})

export const getters = {
  get(state) {
    return state.list
  },
}
