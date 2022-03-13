// state
const state = {
  todoList: [],
  todo: void 0
}

// mutations
const mutations = {
  // 초기화
  saveTodoList (state, list) {
    state.todoList = list
  },

  getTodoStore (state, result) {
    console.log('-> ', result)
    state.todo = result
  }
}

// actions
const actions = {
  // 저장
  async setIsChanged ({ state, commit }, isChange) {
    commit('setIsChanged', isChange)
  }
}

// getters
const getters = {}

export default {
  namespaced: true, // namespace 사용
  state,
  mutations,
  actions,
  getters
}
