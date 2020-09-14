export const state = () => ({
  list: [
    { id: '1', name: 'John', phone: '## #####-####', reference: 'junior high' },
    { id: '2', name: 'Jane', phone: '## #####-####', reference: 'college' },
    { id: '3', name: 'May', phone: '## #####-####', reference: 'work' },
    { id: '4', name: 'Marcus', phone: '## #####-####', reference: '' },
  ],
})

export const getters = {
  get(state) {
    return state.list
  },
}
