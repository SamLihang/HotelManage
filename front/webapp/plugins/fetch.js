import Vue from 'vue'
import fetch from '../utils/fetch'

Vue.prototype.$fetch = fetch

export default ({ app }) => {
  app.$fetch = fetch
};
