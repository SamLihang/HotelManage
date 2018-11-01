import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      height: 0,
    }),
    mutations: {
      setHeight(state, payload) {
        state.height = payload
      }
    }
  })
}

export default createStore