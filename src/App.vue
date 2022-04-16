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
              @keypress.enter="add"
            >
            <button
              class="nav__btn col"
              type="button"
              @click="add"
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
      <div v-show="!firstTask" class="first-task">Добавьте первую свою задачу</div>
      <div
        v-for="(item, idx) in todo"
        :key="item"
        class="row"
      >
        <div class="col">
          <input
            type="checkbox"
            @change="doneTask(item,idx)"
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
      <div v-show="done.length > 0">
        <div class="row todo-item">
          <div class="col todo-item__text">
            Done
          </div>
          <div class="col todo-item__num">
            {{ done.length }}
          </div>
        </div>
        <div
          v-for="(item, idx) in done"
          :key="item"
          class="row"
        >
          <div class="col">
            <input
              type="checkbox"
              checked
              @change="todoTask(item,idx)"
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
    ...mapGetters('todo', { todo: 'allTasks' }),
    ...mapGetters('done', { done: 'done' }),
    firstTask() {
      return this.todo.length > 0 || this.done.length > 0;
    },
  },
  methods: {
    ...mapActions('todo', { addTask: 'add', removeTask: 'remove' }),
    ...mapActions('done', { addDone: 'add', removeDone: 'remove' }),
    add() {
      this.addTask(this.task);
      this.task = '';
    },
    doneTask(item, idx) {
      this.addDone(item);
      this.removeTask(idx);
    },
    todoTask(item, idx) {
      this.addTask(item);
      this.removeDone(idx);
    },
  },
};
</script>

<style lang="scss">
@import "./css/styles.scss";
</style>
