 <template>
    <div>
        <hr />
        <h1 id="theTitle">{{ message }}</h1>
        <hr />
        <ul>
            <!-- https://stackoverflow.com/questions/47608379/vue-language-server-elements-in-iteration-expect-to-have-v-bindkey-directiv -->
            <li v-for="(item,i) in getInternalItens()" :key="i">
                {{ item.value }} - {{ i }}
                <input v-on:click="deleteItem(i)" type="submit" value="Delete Item" />
                <input v-model="checkedItem" v-on:change="checkItem(i, checkedItem)" type="checkbox" />
            </li>
        </ul>
        <input ref="itemName" v-model="text" type="input" value="Add Item" />
        <br />
        <br />
        <p>Existem {{ countItems(this.todoIndex) }} tarefas nesta lista.</p>
        <input v-on:click="insertListItem" type="submit" value="Add Item" />
        <input v-on:click="deleteTodo" type="submit" value="Delete TODO" />
    </div>
</template>

<script>
    export default
    {
        name: 'TodoComponent',
        data:function()
        {
            return {
                //internalItens: [],
                text: ""
            }
        },
        props:
        {
            message: String,
            todoIndex: Number,
            message2: String
        },
        methods:
        {
            standardCall: function()
            {
                alert(this.message);
            },
            insertListItem: function()
            {
                //this.internalItens.push({ value: this.$refs["itemName"].value, color: this.message2 });
                //this.internalItens.push({ value: this.text, color: this.message2 });
                this.$store.commit('ADD_TASK', { index: this.todoIndex, value: this.text, color: 'a' });
                this.text="";
            },
            deleteItem: function(itemIndex)
            {
                //this.$delete(this.internalItens, itemIndex);
                this.$store.commit('REM_TASK', { todoIndex: this.todoIndex, itemIndex: itemIndex });
            },
            checkItem: function(itemIndex, value)
            {
                //TODO:
                alert('To be defined: ' + itemIndex + ' value: ' + value);
            },
            deleteTodo: function()
            {
                this.$emit("removeTodo", this.todoIndex);
            },
            getInternalItens: function()
            {
                return this.$store.getters.getTaskList(this.todoIndex);
            },
            countItems: function()
            {
                return this.$store.getters.countTasks(this.todoIndex);
            }
        },
        computed:
        {

        },
        watch:
        {
            'message': function(V)
            {
                alert(V);
            }
        }
    }
</script>

<style>
</style>

<!-- <template>
    <div>
    <ul class="list-reset">
        <li v-for="item in internalItens" :key="item.value" class="flex items-start mb-6"> -->
            <!-- <img :src="item.img" :alt="item.color" class="rounded-full mr-4"> --><!--
            <div>
                <h3 class="text-black">{{ item.value }}</h3>
                <p class="text-grey-dark mb-2">{{ item.color }}</p>
                <button class="bg-blue hover:bg-blue-dark text-white py-1 px-2 rounded"
                    @click="item.color = !item.color" >
                    {{ !item.color ? 'Learn more' : 'Less' }}
                </button>
                <user-info v-if="item.color" class="mt-2">
                    {{ item.color }}
                </user-info>
            </div>
        </li>
    </ul>
        <p>TodoComponent.vue</p>
    </div>
</template> -->

<!-- <template>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
Vue.component('TodoComponent', {
  data: function () {
    return {
      count: 0
    }
  }
})
</script>-->