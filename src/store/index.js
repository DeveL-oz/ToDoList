import { createStore } from 'vuex';

import done from './done.js';
import todo from './todo.js';

export default createStore({
  modules: {
    done,
    todo,
  },
  strict: process.env.NODE_ENV !== 'production',
});
