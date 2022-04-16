export default {
  namespaced: true,
  state: {
    tasks: [],
  },
  getters: {
    allTasks: (state) => state.tasks,

  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, id) {
      state.tasks.splice(id, 1);
    },

  },
  actions: {
    add(store, task) {
      if (task.length > 3) {
        store.commit('addTask', task);
      }
    },
    remove(store, id) {
      store.commit('removeTask', id);
    },

  },
};
