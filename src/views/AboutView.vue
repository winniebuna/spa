<template>
  <div class="container">
    <addTodo />
    <FilterTodos />
    <TodosView />
    
  </div>
</template>

<script>
// @ is an alias to /src
import TodosView from '@/components/TodosView.vue'
import addTodo from '@/components/addTodo.vue'
import FilterTodos from '@/components/FilterTodos.vue'

export default {
  name: 'HomeView',
  components: {
    TodosView,
    addTodo,
    FilterTodos,
  }
}
</script>
