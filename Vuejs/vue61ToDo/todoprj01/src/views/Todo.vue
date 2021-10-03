<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>

        <!-- TodoInput -->
        <TodoInput v-on:addTodo="addTodo"></TodoInput>

        <!-- TodoList -->
        <TodoList
            v-bind:todoItems="todoItems"
            v-on:doneToggle="doneToggle"
            v-on:removeTodo="removeTodo"
        ></TodoList>

        <!-- TodoFooter -->
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from "../components/todo/TodoHeader.vue";
import TodoInput from "../components/todo/TodoInput.vue";
import TodoList from "../components/todo/TodoList.vue";
import TodoFooter from "../components/todo/TodoFooter.vue";
import store from "../store/index.js";

export default {
    /* pdtmc^2w */
    props: [],
    data() {
        return {
            // todoItems: [
            //     { id: 1, todo: "영화보기", done: false },
            //     { id: 2, todo: "주말 산책", done: true },
            //     { id: 3, todo: "ES6 학습", done: false },
            //     { id: 4, todo: "잠실 야구장", done: false }
            // ]
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        clearAll: function () {
            // this.$data.todoItems = [];
            // this.$set(this.$data, "todoItems", []);
            store.dispatch("clearAll");
        },
        addTodo(newTodoItem /* 자식 컴포넌트에서 보내는 매개변수 */) {
            // store.dispatch("액션명", 넘길값)
            store.dispatch("addTodo", newTodoItem);
        },
        doneToggle: function (id) {
            store.dispatch("doneToggle", id);
        },
        removeTodo: function (id) {
            console.log(id);
            /*
            const findIndex = this.$data.todoItems.findIndex(
                (item) => id === item.id
            );
            this.$data.todoItems.splice(findIndex, 1);
            */
            store.dispatch("removeTodo", id);

            event.stopPropagation();
            event.preventDefault();
        }
    },
    components: {
        TodoHeader: TodoHeader,
        TodoInput: TodoInput,
        TodoList: TodoList,
        TodoFooter: TodoFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
        todoItems() {
            return store.getters.todoItems;
        }
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>