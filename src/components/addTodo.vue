<template>
    <div>
        <h3>Add Todo</h3>
         <form @submit="onSubmit">
            <div class="mb-3 mt-3">
                <input type="text" class="form-control" v-model="title" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
    </div>
</template>

 <script>
  import {mapActions} from 'vuex'
 export default {
     name: "addTodo",
     data() {
         return {
             title:''
         }
     },
     methods: {
         ...mapActions(['addTodo']), 
         onSubmit(e) {
             e.preventDefault();
             this.addTodo(this.title);
         }
     },
 }
 </script>