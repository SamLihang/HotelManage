import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      height: 0,
      token: "",
      menu: {},
    }),
    mutations: {
      setHeight(state, payload) {
        state.height = payload
      },
      setUser(state, payload) {
        state.token = payload
      },
      removeUser(state, payload) {
        state.token = ""
      },
      setMenu(state, payload) {
        state.menu = payload
      }
    }
  })
}

export default createStore