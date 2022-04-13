export default {
  namespaced: true,
  state: {
    doneTasks: [],
  },
  getters: {
    done: (state) => state.doneTasks,

  },
  mutations: {
    addTask(state, task) {
      state.doneTasks.push(task);
    },
    removeTask(state, id) {
      state.doneTasks.splice(id, 1);
    },

  },
  actions: {
    add(store, task) {
      store.commit('addTask', task);
    },
    remove(store, id) {
      store.commit('removeTask', id);
    },

  },
};
