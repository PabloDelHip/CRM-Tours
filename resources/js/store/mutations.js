export const SET_CURRENT_USER = (state, { user }) => {
    console.log('soy state: ', state.user)
    state.user = user
    console.log('soy state: ', state.user.name)
  }