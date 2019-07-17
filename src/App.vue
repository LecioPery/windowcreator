<template>
  <!-- https://www.youtube.com/watch?v=ZSexhaiMKJE -->
    <div>
      <h1>{{ programTitle }}</h1>
      <div>
        <TodoComponent class="todo" :todoIndex="index" :message="todo.value" v-for="(todo, index) in todoVector" v-on:removeTodo="removeTodo" :key="todo.value"></TodoComponent>
      </div>
      <div>
        <input v-model="text" type="input" value="Add TODO" />
        <br />
        <br />
        <input v-on:click="insertTodoItem" type="submit" value="Add TODO" />
        <h1> Temos atualmente {{ countTodos }} to-do's</h1>
      </div>
    </div>
</template>

<script>
    import TodoComponent from './components/todocomponent.vue';
    import { mapState, mapGetters } from 'vuex'
    import firebase from 'firebase'

    /** "const config" vs "var firebase config"?
    https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
    https://br.vuejs.org/v2/examples/firebase.html
    */

    var firebaseConfig =
    {
      apiKey: "AIzaSyAbOkUcRPidBkKfhRe4YTDEFUBWg0HC1Kk",
      authDomain: "windowscreator-125d6.firebaseapp.com",
      databaseURL: "https://windowscreator-125d6.firebaseio.com",
      projectId: "windowscreator-125d6",
      storageBucket: "",
      messagingSenderId: "796218478814",
      appId: "1:796218478814:web:d8fa1dfa71958352"
    };

    firebase.initializeApp(firebaseConfig);

    var todosRef = firebase.database().ref('todos');

    export default
    {
        name: 'App',
        components:
        {
            TodoComponent
        },
        data: function()
        {
            return {
                //todoVector: [],
                text: ""
            }
        },
        firebase:
        {
            todos: todosRef
        },
        methods:
        {
            insertTodoItem: function()
            {
                //this.todoVector.push({value: this.text});
                this.$store.commit('ADD_TODO', {value: this.text, items: []});
                todosRef.push(this.newTodo);
                this.newTodo.name = '';
                this.newTodo.email = '';
            },
            removeTodo: function(todoIndex)
            {
                //this.$delete(this.todoVector, todoIndex);
                this.$store.commit('REM_TODO', todoIndex);
                todosRef.child(todoIndex['.key']).remove()
                //this.REM_TODO(todoIndex);
            }
        },
        computed:
        {
            ...mapState ({
                programTitle: 'programTitle',
                todoVector: 'todoComponents'
            }),
            ...mapGetters ({
                countTodos: 'countTodos'
            })
        }
    }
</script>

<style>
</style>

<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todo {
  width: 25%;
  display: inline-block;
  vertical-align: top;
  margin: 1em;
  border: 1em solid darkslategray;
  padding: 1em;
}
</style>
