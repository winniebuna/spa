<template>
    <div>
        <h3>Filter Todos:</h3>
        <select>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'FilterTodos',
    methods: {
        ...mapActions(['filterTodos'])
    },
}
</script>

<style scoped>
select{
    margin-top: 20px;
    padding: 6px;
    border: #41b883 ipx solid;
}
</style>