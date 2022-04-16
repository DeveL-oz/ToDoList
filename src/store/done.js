export default {
  namespaced: true,
  state: {
    doneTasks: [],
  },
  getters: {
    done: (state) => state.doneTasks,

  },
  mutations: {
    addTask(state, item) {
      state.doneTasks.push(item);
    },
    removeTask(state, id) {
      state.doneTasks.splice(id, 1);
    },

  },
  actions: {
    add(store, item) {
      store.commit('addTask', item);
    },
    remove(store, id) {
      store.commit('removeTask', id);
    },

  },
};
