<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col logo">
          ToDo List
        </div>
        <div class="col nav">
          <div class="row">
            <input
              v-model="task"
              type="text"
              class="nav__inp col"
              @keypress.enter="addTask(task), (task = '')"
            >
            <button
              class="nav__btn col"
              type="button"
              @click="addTask(task), (task = '')"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="row todo-item">
        <div class="col todo-item__text">
          To Do
        </div>
        <div class="col todo-item__num">
          {{ todo.length }}
        </div>
      </div>
      <div
        v-for="(item, idx) in todo"
        :key="item"
        class="row"
      >
        <div class="col">
          <input
            type="checkbox"
            @change="removeTask(idx), addDone(item)"
          >
          <span>{{ item }}</span>
        </div>
        <div class="col">
          <button
            class="task-btn"
            type="button"
            @click="removeTask(idx)"
          >
            Удалить
          </button>
        </div>
      </div>
      <div v-show="doneTask.length > 0">
        <div class="row todo-item">
          <div class="col todo-item__text">
            Done
          </div>
          <div class="col todo-item__num">
            {{ doneTask.length }}
          </div>
        </div>
        <div
          v-for="(item, idx) in doneTask"
          :key="item"
          class="row"
        >
          <div class="col">
            <input
              type="checkbox"
              checked
              @change="removeDone(idx), addTask(item)"
            >
            <span>{{ item }}</span>
          </div>
          <div class="col">
            <button
              type="button"
              class="task-btn"
              @click="removeDone(idx)"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <div class="container">
      <div class="row footer-row">
        &copy; polyachenkov
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      task: '',
    };
  },
  computed: {
    ...mapGetters('todo', { todo: 'tasks' }),
    ...mapGetters('done', { doneTask: 'done' }),
  },
  methods: {
    ...mapActions('todo', { addTask: 'add', removeTask: 'remove' }),
    ...mapActions('done', { addDone: 'add', removeDone: 'remove' }),
  },
};
</script>

<style lang="scss">
@import "./css/styles.scss";
</style>
