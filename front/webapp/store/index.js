import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      height: 0,
      token: "",
      menu: "",
      userid: null,
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
        state.menu = localStorage.menu = payload
      },
      getMenu(state) {
        state.menu = localStorage.menu || ""
      }
    }
  })
}

export default createStore