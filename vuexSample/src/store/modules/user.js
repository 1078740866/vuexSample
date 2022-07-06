const state = {
	//在此处定义组件要用到的属性值
  status: false,
  todoList: []
}

const mutations = {
/**
* 此处定义修改状态值的函数，注意只能是同步函数。
* 因为如果是异步函数，当 mutation 触发的时候，回调函数还没有被调用，
* 那么在回调函数中进行的状态的改变就不可追踪了。
*/
  SET_STATUS: (state, status) => {
    state.status = status
  },
  SET_TODOLIST: (state, todos) => {
    state.todoList = todos
  }
}

const actions = {
	/**
	* Action 类似于 mutation，不同在于：
	* ① Action 提交的是 mutation，而不是直接变更状态。
	* ② Action 可以包含任意异步操作。
	* 最后一个 store.dispatch 在不同模块中可以触发多个 action 函数了。
	*/
  login ({ commit }, val) {
    const { status } = val
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_STATUS', status)
        resolve({ status: status })
      }, 100)
    })
  },
  todoList ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('SET_TODOLIST', todo)
        resolve({ code: 200 })
      }, 100)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


