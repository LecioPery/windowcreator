import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store
({
    state:
    {
        programTitle: 'Todo Lists',
        todoComponents: [],
        tasksList: []
    },
    getters:
    {
        countTodos: state =>
        {
            return state.todoComponents.length;
        },
        countTasks: state =>
        {
            return function(todoIndex)
            {
                return state.todoComponents[todoIndex].items.length;
            }
        },
        getTaskList: state =>
        {
            return function(todoIndex)
            {
                return state.todoComponents[todoIndex].items;
            }
        }
    },
    mutations:
    {
        ADD_TODO: (state, todo) =>
        {
            state.todoComponents.push(todo);
        },
        REM_TODO: (state, todoIndex) =>
        {
            state.todoComponents.splice(todoIndex, 1);
        },
        ADD_TASK: (state, payload) =>
        {
            var value =  payload.value;
            var color = payload.color;
            state.todoComponents[payload.index].items.push({value, color});
        },
        REM_TASK: (state, payload) =>
        {
            var todoIndex = payload.todoIndex;
            var itemIndex = payload.itemIndex;
            state.todoComponents[todoIndex].items.splice(itemIndex, 1);
        }
    },
    actions:
    {
        
    }
})