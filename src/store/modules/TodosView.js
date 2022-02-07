import axios from "axios"


const state = {
    todos: []
}
const getters = {
    allTodos: (state) => state.todos
}
const actions = {
 async fetchTodos({commit}) {
     const response = await axios.get('https://dog.ceo/api/breed/hound/images');
     let {message} = response.data

     commit('setTodos', message)
 },

 async addTodo({ commit }, title){
     const response = await axios.post('https://dog.ceo/api/breeds/list/all', {
         title, completed: false
     });

     commit('newTodo', response.data)
 },
 async deleteTodo({ commit }, id) {
    await axios.delete(`https://dog.ceo/api/breeds/list/all/${id}`);
    
    commit('removeTodo', id)
 },
 async filterTodos({commit}, e){
     const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)

     const response = await axios.get(`https://dog.ceo/api/breed/hound/images?_limit=${limit}`);
     let {message} = response.data;

     commit('setTodos', message)
 }
 
}
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo:(state, id) => 
    state.todos = state.todos.filter(todo => todo.id !==id )
}

export default {
    state,
    getters,
    actions,
    mutations
}