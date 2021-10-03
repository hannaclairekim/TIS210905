import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoItems: [
            { id: 1, todo: "영화보기", done: false },
            { id: 2, todo: "주말 산책", done: true },
            { id: 3, todo: "ES6 학습", done: false },
            //{ id: 4, todo: "잠실 야구장", done: false }
        ]
    },
    getters: {
        todoItems: function(state) {
            return state.todoItems;
        }
    },
    actions: {
        addTodo(mutations, newTodoItem) {
            mutations.commit("addTodo", newTodoItem);
        },
        doneToggle(mutations, id) {
            mutations.commit("doneToggle", id);
        },
        removeTodo(mutations, id, idx) {
            mutations.commit("removeTodo", id, idx);
        },
        clearAll(mutations){
            mutations.commit("clearAll");
        }
    },
    mutations: {
        addTodo(state, newTodoItem) {
            // state.인자 = newTodoItem;
            let maxid = 0;
            if (state.todoItems.length > 0) {
                maxid = state.todoItems
                    .map((item) => item.id)
                    .reduce((prev, curt) => (prev >= curt ? prev : curt));
            } else {
                maxid = 0;
            }
            const newid = maxid + 1;

            const todo = {
                id: newid,
                todo: newTodoItem,
                done: false
            };

            state.todoItems.push( todo );
        },
        clearAll: function(state){
            state.todoItems = [];
        },
        doneToggle: function(state, id) {
            const findIndex = state.todoItems.findIndex(
                (item) => id === item.id
            );
            state.todoItems[findIndex].done = !state.todoItems[findIndex].done;
        },
        removeTodo: function(state, id){
            const findIndex = state.todoItems.findIndex(
                (item) => id === item.id
            );
            state.todoItems.splice(findIndex, 1);
        }
    },
    modules: {}
});
