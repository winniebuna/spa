<template>
    
        <h3>Todos</h3>
        <div class="row">
             <div v-if="todo">
                 <img src="../assets/loading-icon-transparent-background-12.gif" alt="" class="img-fluid">
        </div>
            <div v-else>
        
         <div class="todos">
          <div class="container-fluid todo" v-for="todo in allTodos" :key="todo">
            <img :src="todo" alt="" class="img-fluid">
          
      </div>
    </div>  
        </div>
     
        </div>

   
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            todo: ''
        }
    },
    name: "TodosView",
    computed: {
        ...mapGetters(['allTodos']),
    },
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo']),
    },
    created() {
        this.fetchTodos()
    }
}
</script>
<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem
} 
.todo{
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    position: relative;
    text-align: center;
    cursor: pointer;
}
i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
}
</style>