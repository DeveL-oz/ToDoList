<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col logo">ToDo List</div>
        <div class="col nav">
          <input type="text" class="nav__inp" />
          <button class="nav__btn">Add New Task</button>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="row todo-item">
        <div class="col todo-item__text">To Do</div>
        <div class="col todo-item__num">5</div>
      </div>
      <div class="row">
        <div class="col">
          <input type="checkbox" />
          <span>Go to Sber</span>
        </div>
        <div class="col">
          <button class="task-btn">Remove</button>
        </div>
      </div>
      <div class="row todo-item">
        <div class="col todo-item__text">Done</div>
        <div class="col todo-item__num">1</div>
      </div>
      <div class="row">
        <div class="col">
          <input type="checkbox" class="doneCheckbox" checked />
          <span>Eat Food</span>
        </div>
        <div class="col">
          <button class="task-btn">Remove</button>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
</script>

<style land="scss">
@import "./css/styles.scss";
</style>
