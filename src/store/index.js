import Vue from 'vue'
import Vuex from 'vuex'

import TodoStore from './todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todoStore: TodoStore
  }
})

export default store
